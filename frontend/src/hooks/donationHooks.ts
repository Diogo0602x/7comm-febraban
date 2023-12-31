import { useQuery } from 'react-query'
import { getDonationCount, getAllDonations } from '../api/donationApis'
import { useMemo } from 'react'
import { Donation } from '../types/Donation'

export const useTotalDonations = () => {
  const { data: donations = [] } = useAllDonations()

  const totalDonations = useMemo(() => {
    if (!donations || donations.length === 0) {
      return 0
    }

    return donations.reduce(
      (total: number, donation: Donation) =>
        total + parseFloat(donation.amount),
      0,
    )
  }, [donations])

  return { data: totalDonations }
}

export const useDonationCount = () => {
  return useQuery('donationCount', getDonationCount, {
    refetchInterval: 5000,
  })
}

export const useAllDonations = () => {
  return useQuery('allDonations', getAllDonations, {
    refetchInterval: 5000,
  })
}
