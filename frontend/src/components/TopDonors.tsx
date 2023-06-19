import React, { useMemo } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import donations from '../constants/donations'

function TopDonors() {
  const topDonors = useMemo(() => {
    const sortedDonations = [...donations].sort((a, b) => b.amount - a.amount)
    return sortedDonations.slice(0, 10)
  }, [])

  return (
    <div className="mt-[2rem] ml-[10rem]">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
        Top Doadores
      </h2>
      <BarChart
        width={500}
        height={300}
        data={topDonors}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#93bf85" />
      </BarChart>
    </div>
  )
}

export default TopDonors
