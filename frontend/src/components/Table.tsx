import { formatTimestamp } from '../functions/formatTimestamp'
import { Table, Spin, Alert } from 'antd'
import useFetch from '../hooks/useFetch'
import formatCurrency from '../functions/formatCurrency'

interface TableProps {
  searchValue: string
}

function TableComponent({ searchValue }: TableProps) {
  const url = searchValue
    ? `http://host.docker.internal:3000/api/getdonation?name=${searchValue}`
    : 'http://host.docker.internal:3000/api/getalldonations'

  const { data: donations, initialLoading, error } = useFetch(url)

  const columns = [
    {
      title: 'Doador',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Valor',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: string) => formatCurrency(amount),
    },
    {
      title: 'Data',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: formatTimestamp,
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
    },
  ]

  if (initialLoading) {
    return (
      <div className="loader-container">
        <Spin size="large" className="loader" />
      </div>
    )
  }

  if (error) {
    return <Alert message={error} type="error" />
  }

  const sortedDonations = [...donations].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
  )

  const pagination = {
    defaultPageSize: 4,
    pageSizeOptions: ['10', '15', '20'],
    showSizeChanger: true,
  }

  return (
    <div className="px-[2.5rem] my-[2rem]">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
        Doações
      </h2>
      <Table
        columns={columns}
        dataSource={sortedDonations}
        pagination={pagination}
        rowKey="transactionId"
      />
    </div>
  )
}

export default TableComponent
