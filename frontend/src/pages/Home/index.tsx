import React from 'react'
import StateBoxes from '../../components/StateBoxes'
import Table from '../../components/Table'

import DonationNotification from '../../components/DonationNotification'

interface HomeProps {
  searchValue: string
}

function Home({ searchValue }: HomeProps) {
  return (
    <div className="Home">
      <StateBoxes />
      <Table searchValue={searchValue} />
      <DonationNotification />
    </div>
  )
}

export default Home
