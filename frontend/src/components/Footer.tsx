import React from 'react'
import { FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa'
import besu from '../assets/besu-logo.svg'

const Footer = () => (
  <div className="footer flex justify-between items-center mx-[2rem] mt-auto">
    <div className="flex items-center space-x-[1rem] mb-[1rem]">
      <a
        href="https://www.instagram.com/7comm_oficial/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram size={30} className="text-primary hover:text-secondary" />
      </a>
      <a
        href="https://www.linkedin.com/company/7comm/mycompany/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={30} className="text-primary hover:text-secondary" />
      </a>
      <a href="https://www.7comm.com.br/" target="_blank" rel="noreferrer">
        <FaGlobe size={30} className="text-primary hover:text-secondary" />
      </a>
    </div>
    <div className="flex items-center">
      <div className="flex items-center space-x-[1rem]">
        <div className="text-black font-semibold">Powered by</div>
        <img src={besu} alt="Besu logo" className="w-[100px] h-[30px]" />
      </div>
      <span className=" text-2xl font-bold px-[2rem]">-</span>
      <div className="copyright font-semibold">
        2023 Todos os direitos reservados 7COMm
      </div>
    </div>
  </div>
)

export default Footer
