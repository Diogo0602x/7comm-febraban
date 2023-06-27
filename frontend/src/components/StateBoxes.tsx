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
    if (!donations || donations.length === 0) {
      return null
    }

    return donations.reduce((prev: Donation, current: Donation) =>
      parseFloat(prev.amount) > parseFloat(current.amount) ? prev : current,
    )
  }, [donations])

  const progress = useMemo(() => {
    if (!totalDonations || !goal) {
      return 0
    }

    return totalDonations > goal ? 100 : (totalDonations / goal) * 100
  }, [totalDonations, goal])

  if (!totalDonations || !donations || !donationCount) {
    return null
  }

  return (
    <section className="px-[2.5rem] mt-[2rem]">
      <div className="flex justify-between space-x-4 ">
        <div className="bg-white  p-4 rounded-lg shadow-lg shadow-gray-300 w-[370px] h-[110px]">
          <div className="flex space-x-2">
            <FaDollarSign size={24} className="mb-2" color="green" />
            <h2 className="font-semibold text-lg  text-slate-600 ">
              Total de Doações
            </h2>
          </div>
          <p className="text-xl font-bold text-black">{`${
            printPrice(totalDonations) || 0
          }`}</p>
        </div>
        <div className="bg-white  p-4 rounded-lg shadow-lg shadow-gray-300 w-[370px] h-[110px]">
          <div className="flex space-x-2">
            <FaUsers size={24} className="mb-2" color="blue" />
            <h2 className="font-semibold text-lg  text-slate-600">
              Quantidade de Doadores
            </h2>
          </div>
          <p className="text-xl font-bold text-black">{donationCount}</p>
        </div>
        <div className="bg-white  p-4 rounded-lg shadow-lg shadow-gray-300 w-[370px] h-[110px]">
          <div className="flex space-x-2">
            <FaBullseye
              size={24}
              className="mb-2"
              color={progress === 100 ? 'green' : 'red'}
            />{' '}
            <h2 className="font-semibold text-lg  text-slate-600">Meta</h2>
          </div>
          <p className="text-[19.5px] font-bold text-black">
            {`${printPrice(totalDonations) || 0} / ${printPrice(goal)} `}
            <span style={{ color: progress === 100 ? 'green' : 'red' }}>
              {`(${progress.toFixed(1)}%)`}
            </span>
          </p>
        </div>
        <div className="bg-white  p-4 rounded-lg shadow-lg shadow-gray-300 w-[370px] h-[110px] ">
          <div className="flex space-x-2">
            <FaTrophy size={24} className="mb-2" color="#d67400" />
            <h2 className="font-semibold text-lg text-slate-600">Top Doador</h2>
          </div>
          <p className="text-black text-xl font-bold">
            {`${topDonor.name || 'Seja o Primeiro'} - `}
            <span className="text-xl font-bold text-black">{`${
              printPrice(topDonor.amount) || 0
            }`}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default StateBoxes
