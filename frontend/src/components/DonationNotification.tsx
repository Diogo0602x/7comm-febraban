import React, { useCallback, useEffect, useState } from 'react'
import { getAllDonations } from '../api/donationApis'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { printPrice } from '../functions/printPrice'

const DonationNotification = () => {
  const [, setDonations] = useState<Array<any>>([])
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const fetchDonations = useCallback(async () => {
    try {
      const fetchedDonations = await getAllDonations()

      setDonations((prevDonations) => {
        fetchedDonations.forEach((donation: any) => {
          if (!prevDonations.find((d) => d.id === donation.id)) {
            setMessage(
              `Obrigado ${donation.name} por doar ${printPrice(
                donation.amount,
              )}`,
            )
            setOpen(true)
          }
        })

        return fetchedDonations
      })
    } catch (error) {
      console.error('Failed to fetch donations:', error)
    }
  }, [])

  useEffect(() => {
    fetchDonations()
    const intervalId = setInterval(fetchDonations, 5000)

    return () => clearInterval(intervalId)
  }, [fetchDonations])

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
export default DonationNotification
