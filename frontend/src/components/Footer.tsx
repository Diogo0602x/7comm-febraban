import React from 'react'
import { FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa'

const Footer = () => (
  <div className="footer flex justify-between mx-[2rem] my-[2rem]">
    <div className="flex ">
      <a
        href="https://www.instagram.com/7comm_oficial/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.linkedin.com/company/7comm/mycompany/"
        target="_blank"
        rel="noreferrer"
        className="ml-[1rem]"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://www.7comm.com.br/"
        target="_blank"
        rel="noreferrer"
        className="ml-[1rem]"
      >
        <FaGlobe size={30} />
      </a>
    </div>
    <div className="copyright">2023 Todos os direitos reservados 7COMm</div>
  </div>
)

export default Footer
