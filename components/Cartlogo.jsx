import {FaShoppingCart, FaSearch} from 'react-icons/fa'
import Nav from './Nav'
function Cartlogo({color=''}) {
  return (
    <div className="flex gap-5 items-center md:gap-6">
          <div className="relative">
            <FaShoppingCart className={`text-2xl ${color}`}/>
            <span className="absolute -top-3 -right-3 w-5 h-5 bg-red-800 rounded-full flex text-sm text-white justify-center items-center">0</span>
          </div>
          <FaSearch className={`text-2xl ${color}`}/>
          <Nav/>
      </div>
  )
}

export default Cartlogo