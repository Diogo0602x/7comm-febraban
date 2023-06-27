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
    defaultPageSize: 5,
    pageSizeOptions: ['10', '15', '20'],
    showSizeChanger: true,
  }

  return (
    <div className="px-[2.5rem] my-[2rem]">
      <div className="bg-white  rounded-lg shadow-lg shadow-gray-300">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold p-4 text-slate-600">
          Doações
        </h2>
        <Table
          columns={columns}
          dataSource={sortedDonations}
          pagination={pagination}
          className="pr-2"
          rowKey="transactionId"
        />
      </div>
    </div>
  )
}

export default TableComponent
