import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from 'react-query'

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App flex flex-col min-h-screen">
        <NavBar onSearch={setSearchValue} />
        <Home searchValue={searchValue} />
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App
