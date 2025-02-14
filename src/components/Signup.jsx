import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
   <div className="nav w-full pt-2 pb-3 pl-5 pr-5 text-white text-2xl font-bold flex justify-between items-center">
           <h1 className='bg-black pt-2 pb-3 pl-2 pr-2 rounded-[20px] '>ChatApp</h1>
   
           <ul className='flex gap-10'>
               <li className='bg-black pt-2 pb-3 pl-2 pr-2 rounded-[20px] '><Link to="/">Home</Link></li>
               <li className='bg-black pt-2 pb-3 pl-2 pr-2 rounded-[20px] '><Link to="/login">Login</Link></li>
           </ul>
       </div>
    <div className="flex justify-center items-center h-screen">
      <form  className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white">Sign Up</h2>
        <input type="text" name="name" placeholder="Name" className="mt-2 p-2 w-full rounded bg-gray-700 text-white" 
        required  />
        <input type="email" name="email" placeholder="Email" className="mt-2 p-2 w-full rounded bg-gray-700 text-white"
         required />
        <input type="password" name="password" placeholder="Password" className="mt-2 p-2 w-full rounded bg-gray-700 text-white" 
        required/>
        <button type="submit" 
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition w-full">Sign Up</button>
      </form>
    </div>
    </>
  )
}

export default Signup