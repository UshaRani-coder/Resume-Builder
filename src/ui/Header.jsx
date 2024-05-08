import React from 'react'
import logo from '../assets/logo.jpg'
function Header() {
  return (
    <div className=" bg-white navbar  flex flex-row py-5 pl-5 gap-1.5  shadow-md w-100% fixed top-0 left-0 right-0 z-50 ">
      <img className="logo w-7" src={logo} alt="logo" />
      <h2 className="name text-xl font-bold ">Inspiration App</h2>
    </div>
  )
}

export default Header
