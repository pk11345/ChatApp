import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className="nav w-full pt-2 pb-3 pl-5 pr-5 text-white text-2xl font-bold flex justify-between items-center">
        <h1 className='bg-black pt-2 pb-3 pl-2 pr-2 rounded-[20px] '>ChatApp</h1>

        <ul className='flex gap-3 md:gap-10'>
            <li className='bg-black pt-2 pb-3 pl-2 pr-2 rounded-[20px] '><Link to="/signup">Signup</Link></li>
            <li className='bg-black pt-2 pb-3 pl-2 pr-2 rounded-[20px] '><Link to="/login">Login</Link></li>
        </ul>
    </div>
    </>
  )
}

export default Nav