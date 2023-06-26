import React from 'react'
import StateBoxes from '../../components/StateBoxes'
import Table from '../../components/Table'

interface HomeProps {
  searchValue: string
}

function Home({ searchValue }: HomeProps) {
  return (
    <div className="Home">
      <StateBoxes />
      <Table searchValue={searchValue} />
    </div>
  )
}

export default Home
