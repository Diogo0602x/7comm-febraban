import { useMemo, useState, useEffect } from 'react'
import { printPrice } from '../functions/printPrice'
import {
  useTotalDonations,
  useAllDonations,
  useDonationCount,
} from '../hooks/donationHooks'
import { Donation } from '../types/Donation'

function StateBoxes() {
  const { data: totalDonations } = useTotalDonations()
  const { data: donations } = useAllDonations()
  const { data: donationCount } = useDonationCount()

  const [goal, setGoal] = useState(500)

  useEffect(() => {
    if (totalDonations > goal) {
      setGoal((prevGoal) => prevGoal * 2)
    }
  }, [totalDonations, goal])

  const topDonor = useMemo(() => {
    return donations?.reduce((prev: Donation, current: Donation) =>
      parseFloat(prev.amount) > parseFloat(current.amount) ? prev : current,
    )
  }, [donations])

  const progress = useMemo(() => {
    return totalDonations > goal ? 100 : (totalDonations / goal) * 100
  }, [totalDonations, goal])

  if (!totalDonations || !donations || !topDonor || !donationCount) {
    return null
  }

  return (
    <section className="px-[2.5rem] my-[2rem]">
      <div className="flex justify-between space-x-4 ">
        <div className="bg-white p-4 rounded-lg shadow-lg shadow-blue-300/50 w-1/4">
          <h2 className="font-bold text-xl mb-2 ">Total de Doações</h2>
          <p
            className={`text-lg ${
              totalDonations > 0 ? 'text-green-500' : 'text-red-500'
            }`}
          >{`${printPrice(totalDonations)}`}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg shadow-blue-300/50 w-1/4">
          <h2 className="font-bold text-xl mb-2 ">Quantidade de Doadores</h2>
          <p className="text-lg text-green-500">{donationCount}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg shadow-blue-300/50 w-1/4">
          <h2 className="font-bold text-xl mb-2 ">Meta</h2>
          <p
            className={`text-lg ${
              progress >= 100 ? 'text-green-500' : 'text-red-500'
            }`}
          >{`${progress.toFixed(1)}% (${totalDonations}/${goal})`}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg shadow-blue-300/50 w-1/4">
          <h2 className="font-bold text-xl mb-2 ">Top Doador</h2>
          <p className="text-gray-700 text-lg font-semibold">
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

export default StateBoxes
