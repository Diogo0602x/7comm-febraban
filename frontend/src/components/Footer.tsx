import besu from '../assets/besu.png'
import finansystech from '../assets/finansystech.png'
import amigos from '../assets/amigos.png'

const Footer = () => (
  <div className="footer  border-t border-gray-400 shadow-lg mt-auto">
    <div className="flex justify-between items-center mx-[2rem]  ">
      <div className="flex items-center">
        <div className="flex items-center space-x-[1rem]">
          <div className="text-black font-bold">Em parceria com:</div>
          <img
            src={finansystech}
            alt="Finansystech logo"
            className="w-[120px] h-full"
          />
          <img src={amigos} alt="Amigos logo" className="w-[90px] h-full" />
        </div>
      </div>
      <div className="flex items-center justify-center flex-grow">
        <div className="text-black font-bold">
          © 2023 7COMm - Todos os direitos reservados
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center space-x-[1rem]">
          <div className="text-black font-bold">Powered by</div>
          <img src={besu} alt="Besu logo" className="w-[120px] h-full" />
        </div>
      </div>
    </div>
  </div>
)

export default Footer
