import React from 'react'
import { formatTimestamp } from '../functions/formatTimestamp'
import { Table, Spin, Alert } from 'antd'
import useFetch from '../hooks/useFetch'
import formatCurrency from '../functions/formatCurrency'

interface TableProps {
  searchValue: string
}

function TableComponent({ searchValue }: TableProps) {
  const url = searchValue
    ? `http://besufbt.eastus.cloudapp.azure.com/api/getdonation?name=${searchValue}`
    : 'http://besufbt.eastus.cloudapp.azure.com/api/getalldonations'

  const { data: donations, isLoading, error } = useFetch(url)

  const columns = [
    {
      title: 'De',
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

  if (isLoading) {
    return (
      <div className="loader-container">
        <Spin size="large" className="loader" />
      </div>
    )
  }

  if (error) {
    return <Alert message={error} type="error" />
  }

  const pagination = {
    defaultPageSize: 6,
    pageSizeOptions: ['6', '10', '20'],
    showSizeChanger: true,
  }

  return (
    <div className="px-[2.5rem] my-[2rem]">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
        Doações
      </h2>
      <Table
        columns={columns}
        dataSource={donations}
        pagination={pagination}
        rowKey="transactionId"
      />
    </div>
  )
}

export default TableComponent
