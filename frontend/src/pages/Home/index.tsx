import React from 'react'
import StateBoxes from '../../components/StateBoxes'
import Table from '../../components/Table'
import Graph from '../../components/Graph'
import TopDonors from '../../components/TopDonors'

function Home() {
  return (
    <div className="Home">
      <StateBoxes />
      <Table />
      {/* <Graph />
      <TopDonors /> */}
    </div>
  )
}

export default Home
