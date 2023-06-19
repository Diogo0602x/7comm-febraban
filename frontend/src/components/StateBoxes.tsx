import React, { useMemo } from 'react'
import donations from '../constants/donations'
import { printPrice } from '../functions/printPrice'

function StatBoxes() {
  const totalDonations = donations.reduce(
    (acc, donation) => acc + donation.amount,
    0,
  )
  const topDonor = donations.reduce((prev, current) =>
    prev.amount > current.amount ? prev : current,
  )

  const goal = 1000

  const progress = useMemo(() => {
    return totalDonations > goal ? 100 : (totalDonations / goal) * 100
  }, [totalDonations, goal])

  return (
    <section className="px-[2.5rem] my-[2rem]">
      <div className="flex justify-between ">
        <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
          <h2 className="font-bold text-xl mb-2">Total Doações</h2>
          <p
            className={`text-lg ${
              totalDonations > 0 ? 'text-green-500' : 'text-red-500'
            }`}
          >{`${printPrice(totalDonations)}`}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
          <h2 className="font-bold text-xl mb-2">Meta</h2>
          <p
            className={`text-lg ${
              progress >= 100 ? 'text-green-500' : 'text-red-500'
            }`}
          >{`${progress.toFixed(1)}% (${totalDonations}/${goal})`}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
          <h2 className="font-bold text-xl mb-2">Top Doador</h2>
          <p className="text-gray-700 text-lg">
            {`${topDonor.name} - `}
            <span
              className={`text-lg ${
                topDonor.amount > 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >{`${printPrice(topDonor.amount)}`}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default StatBoxes
