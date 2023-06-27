import { useMemo, useState, useEffect } from 'react'
import { printPrice } from '../functions/printPrice'
import {
  useTotalDonations,
  useAllDonations,
  useDonationCount,
} from '../hooks/donationHooks'
import { Donation } from '../types/Donation'
import { FaDollarSign, FaUsers, FaBullseye, FaTrophy } from 'react-icons/fa'

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
        <div className="bg-white  p-4 rounded-lg shadow-lg shadow-gray-300 w-1/4">
          <FaDollarSign size={24} className="mb-2" color="green" />
          <p className="text-xl font-bold text-black">{`${printPrice(
            totalDonations,
          )}`}</p>
          <h2 className="font-semibold text-lg mt-2 text-slate-600 ">
            Total de Doações
          </h2>
        </div>
        <div className="bg-white  p-4 rounded-lg shadow-lg shadow-gray-300 w-1/4">
          <FaUsers size={24} className="mb-2" color="blue" />
          <p className="text-xl font-bold text-black">{donationCount}</p>
          <h2 className="font-semibold text-lg mt-2 text-slate-600">
            Quantidade de Doadores
          </h2>
        </div>
        <div className="bg-white  p-4 rounded-lg shadow-lg shadow-gray-300 w-1/4">
          <FaBullseye
            size={24}
            className="mb-2"
            color={progress === 100 ? 'green' : 'red'}
          />{' '}
          <p className="text-xl font-bold text-black">
            {`${printPrice(totalDonations)} / ${printPrice(goal)} - `}
            <span style={{ color: progress === 100 ? 'green' : 'red' }}>
              {`(${progress.toFixed(1)}%)`}
            </span>
          </p>
          <h2 className="font-semibold text-lg mt-2 text-slate-600">Meta</h2>
        </div>
        <div className="bg-white  p-4 rounded-lg shadow-lg shadow-gray-300 w-1/4">
          <FaTrophy size={24} className="mb-2" color="#d67400" />
          <p className="text-black text-xl font-bold">
            {`${topDonor.name} - `}
            <span className="text-xl font-bold text-black">{`${printPrice(
              topDonor.amount,
            )}`}</span>
          </p>
          <h2 className="font-semibold text-lg mt-2 text-slate-600">
            Top Doador
          </h2>
        </div>
      </div>
    </section>
  )
}

export default StateBoxes
