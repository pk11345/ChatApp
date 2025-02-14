import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <>
    <div className='p-7 w-full h-[400px] flex justify-center items-center'>
        <h1 className='flex flex-col items-center text-3xl font-semibold text-white'>Welcome! 
          <span>New User? <Link to="/signup">Signup</Link></span> 
          <span className='flex'>Already an User? <Link to="/login">Login</Link></span> </h1>
    </div>
    </>
  )
}

export default Welcome