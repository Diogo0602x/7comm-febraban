import React from 'react'
import donations from '../constants/donations'
import { formatTimestamp } from '../functions/formatTimestamp'
import { Table } from 'antd'

function TableComponent() {
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

  return (
    <div className="px-[2.5rem] my-[2rem]">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
        Doações
      </h2>
      <Table columns={columns} dataSource={donations} rowKey="transactionId" />
    </div>
  )
}

export default TableComponent
