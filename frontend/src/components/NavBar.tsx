import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import logo from '../assets/logo.png'

const NavBar = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSearch(inputValue)
  }

  return (
    <div className=" border-b  shadow-lg ">
      <div className=" flex justify-between items-center mx-[2rem] ">
        <img src={logo} alt="logo" className="max-w-[200px]" />
        <form onSubmit={handleSubmit} className="relative">
          <input
            className="search pr-10 rounded  focus:border-secondary focus:outline-none py-2 px-4"
            type="search"
            placeholder="Busca por doador"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button
            type="submit"
            className="search-icon absolute right-2 top-1/2 transform -translate-y-1/2 text-primary"
          >
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  )
}

export default NavBar
