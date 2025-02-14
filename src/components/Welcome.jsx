import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <>
    <div className='p-7 w-full h-[400px] flex justify-center items-center'>
        <h1 className='flex flex-col items-center text-3xl font-semibold text-white bg-black p-7 md:p-10 rounded-[30px]'>Welcome! 
          <span className='flex gap-1'>New <span>User?</span>  <Link to="/signup">Signup</Link></span> 
          <span className='flex gap-1'>Already <span>an</span><span>User?</span> <Link to="/login">Login</Link></span> </h1>
    </div>
    </>
  )
}

export default Welcome