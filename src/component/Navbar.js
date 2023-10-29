import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import {
  FiUserPlus
} from "react-icons/fi";

export default function Navbar() {
  return (
    <header>
    <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
                <img src="https://www.weblly.in/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="" />
            </Link>
            <div className="flex items-center  lg:order-2">
                <Link to="/create" className="  focus:ring-4 focus:ring-primary-300 font-normal rounded-lg text-sm px-4 lg:px-5 py-2   text-white bg-orange-700  border  border-orange-700  hover:border-orange-700 hover:bg-transparent hover:text-orange-500">
                  <span className='flex place-items-center gap-2'><FiUserPlus/>  Employee</span></Link>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
              <SearchBar/>
            </div>
        </div>
    </nav>
</header>
  )
}
