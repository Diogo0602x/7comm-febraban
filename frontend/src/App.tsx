import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from 'react-query'

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const queryClient = new QueryClient()
  console.log(import.meta.env.VITE_APP_CLIENT_ID) // Test the environment variable
  console.log(import.meta.env.VITE_APP_CLIENT_SECRET) // Test the environment variable

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
