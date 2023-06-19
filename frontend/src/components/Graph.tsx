import React from 'react'
import { Cell, PieChart, Pie } from 'recharts'
import donations from '../constants/donations'

function Graph() {
  const goal = 900
  const totalDonations = donations.reduce(
    (total, donation) => total + donation.amount,
    0,
  )
  const remaining = goal - totalDonations

  const data = [
    { name: 'Donations', value: totalDonations },
    { name: 'Remaining', value: remaining },
  ]

  return (
    <section className="px-[2.5rem] my-[2rem] ">
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
          Progresso de Doação
        </h2>
        <PieChart width={400} height={250}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            <Cell key="cell-0" fill="#82ca9d" />
            <Cell key="cell-1" fill="#4b4b4b" />
          </Pie>
        </PieChart>
        <p className="text-sm md:text-base lg:text-lg mt-2">{`Doado: ${totalDonations.toFixed(
          2,
        )} / ${goal}`}</p>
      </div>
    </section>
  )
}

export default Graph
