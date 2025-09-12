import React, { useEffect } from 'react'
import { Link, useNavigate } from '@tanstack/react-router';
import logo from '../assets/logo.png'
export default function Navbar() {
const navigate = useNavigate()
const [showMenu, setShowMenu] = React.useState<boolean>(false)
const [tokken, setToken] = React.useState<boolean>(true)
  const LoginButton= () => {
    navigate({
      to: '/login',
    })
  } 
   return (
    <header className="mb-2 w-full h-16 border-b-2 border-cyan-700 text-white flex justify-between items-center px-4">
        <img src={logo} alt="logo" className="h-30 cursor-pointer" />
      <ul className="hidden md:flex gap-6 items-center text-black font-medium">
        <li className="py-1 group cursor-pointer">
          <Link to="/">Home</Link>
          <hr className="w-3/5 m-auto border-none h-0.5 bg-cyan-700 transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300" />
        </li>

        <li className="py-1 group cursor-pointer">
          <Link to="/appointments">Doctor</Link>
          <hr className="w-3/5 m-auto border-none h-0.5 bg-cyan-700 transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300" />
        </li>

        <li className="py-1 group cursor-pointer">
          About
          <hr className="w-3/5 m-auto border-none h-0.5 bg-cyan-700 transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300" />
        </li>

        <li className="py-1 group cursor-pointer">
          Contact
          <hr className="w-3/5 m-auto border-none h-0.5 bg-cyan-700 transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300" />
        </li>
      </ul>
    <div className='flex items-center gap-4 '>
        {
            tokken?
            <div className="flex items-center gap-2 cursor-pointer relative group">
  <img
    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
    alt="profile"
    className="w-8 rounded-full"
  />
  <span className="font-medium text-black">Username</span>

  <div className="absolute top-full right-0 text-base font-medium text-gray hidden group-hover:block pt-2">
    <div className="min-w-32 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-lg">
      <p className="text-sm text-gray-700 hover:bg-gray-200 p-1 rounded-md cursor-pointer">
        Profile
      </p>
      <p className="text-sm text-gray-700 hover:bg-gray-200 p-1 rounded-md cursor-pointer">
        Settings
      </p>
      <p
        onClick={() => setToken(false)}
        className="text-sm text-gray-700 hover:bg-gray-200 p-1 rounded-md cursor-pointer"
      >
        Logout
      </p>
    </div>
  </div>
</div>


            :
            <button onClick={LoginButton} className="cursor-pointer bg-cyan-700 text-white px-4 py-2 rounded-md font-semibold">
                Login
            </button>
        }
        
    </div>
      
    </header>
  );
}
