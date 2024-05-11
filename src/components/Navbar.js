import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Darkmode from './Darkmode';
import logo from './images/logo.png';    

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({ dropdown1: false, dropdown2: false });


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (dropdown) => setIsDropdownOpen({ ...isDropdownOpen, [dropdown]: !isDropdownOpen[dropdown] });

  return (
    <nav className="bg-white shadow-lg  hover:shadow-xl dark:bg-dark   "  > {/* Increased shadow size */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-8  ">
            <div  className='pr-10' >
              {/* Website Logo */}
              <a href="#" className="flex items-center py-6 px-8   " >
                <img src={require("./images/logo.png")} alt="Logo" className="h-[46px] w-[160px] ml-1" />
                {/* <span className="font-semibold text-gray-500 text-lg">Navbar</span> */}
                {/* add comment dfor pushing pirpose  */}
              </a>
            </div>
            {/* Primary Navbar items */}
            <ul className="hidden md:flex items-center space-x-1  ">
              <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300  dark:text-white ">Home</a> {/* Added hover effect */}
              {/* Dropdown 1 */}
              <div className="relative">
                <button onClick={() => toggleDropdown('dropdown1')} className="py-4 px-2 dark:text-white  text-gray-500 font-semibold hover:text-blue-500 transition duration-300"> Community Section </button> {/* Added hover effect */}
                {isDropdownOpen.dropdown1 && (
                  <div className="absolute bg-white  dark:text-white shadow-lg py-3"> {/* Increased shadow size */}
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-300 dark:text-white  "> </a> {/* Added transition */}
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-300 dark:text-white ">Link 2</a> {/* Added transition */}
                  </div>
                )}
              </div>
              {/* Dropdown 2 */}
              <div className="relative">
                <button onClick={() => toggleDropdown('dropdown2')} className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"></button> {/* Added hover effect */}
                {isDropdownOpen.dropdown2 && (
                  <div className="absolute bg-white shadow-lg py-3"> {/* Increased shadow size */}
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-300">Link 3</a> {/* Added transition */}
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-300">Link 4</a> {/* Added transition */}
                  </div>
                )}
              </div>
              <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300 dark:text-white  ">About</a> {/* Added hover effect */}
              <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300 dark:text-white  ">Contact</a> {/* Added hover effect */}
            </ul>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">Log In</a>
            <a href="" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Sign Up</a>
          </div>
          {/* add dark  mode */}
          <div className='py-4' >
          {/* <Darkmode/> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              {isMenuOpen ? <XIcon className="w-6 h-6 text-gray-500" /> : <MenuIcon className="w-6 h-6 text-gray-500" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200 transition duration-300">Home</a> {/* Added transition */}
        {/* Mobile Dropdowns */}
        {/* ... similar structure for mobile dropdowns as above */}
      </div>
     
    </nav>
  );
};

export default Navbar;
