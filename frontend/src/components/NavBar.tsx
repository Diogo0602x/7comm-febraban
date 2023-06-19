import React from 'react'
import { FaSearch } from 'react-icons/fa'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <div className="flex justify-between items-center mx-[2rem]">
      <img src={logo} alt="logo" className="max-w-[200px]" />
      <div className="relative">
        <input
          className="search pr-10"
          type="search"
          placeholder="Busque seu nome"
        />
        <FaSearch className="search-icon absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  )
}

export default NavBar
