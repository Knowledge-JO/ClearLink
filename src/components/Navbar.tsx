import logo from "../assets/logo.png"
import chevronDown from "../assets/chevron-down.png"

const Navbar = () => {
  return (
    <div className="px-36 mt-8">
      <div className="flex items-center border-[1px] border-gray-300 rounded-full justify-between px-5 h-16 bg-gray-100">
        <div className="flex gap-2">
          <img src={logo} alt="" className="w-[25.384px] h-[28px]" />
          <p className="text-lg font-bold text-gray-900">
            ClearLink<span className="text-blue-400">.</span>
          </p>
        </div>

        <ul className="flex gap-3">
          <li className="flex items-center gap-1">
            <p className="font-bold text-gray-500">products</p>
            <img src={chevronDown} alt="" className="w-[18px] h-[18px]" />
          </li>
          <li className="flex items-center gap-1">
            <p className="font-bold text-gray-500">solutions</p>
            <img src={chevronDown} alt="" className="w-[18px] h-[18px]" />
          </li>
          <li className="flex items-center gap-1">
            <p className="font-bold text-gray-500">Resources</p>
            <img src={chevronDown} alt="" className="w-[18px] h-[18px]" />
          </li>
          <li>
            <p className="font-bold text-gray-500">Pricing</p>
          </li>
        </ul>

        <div className="flex gap-4">
          <button className="border-[1px] border-gray-400 font-bold rounded-full px-3 h-9 text-sm">
            Talk to sales
          </button>
          <button className="bg-blue-700 font-bold text-white rounded-full px-3 h-9 text-sm">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
