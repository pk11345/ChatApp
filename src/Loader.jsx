import React from 'react'
import { LuVolleyball } from "react-icons/lu";


const Loader = () => {
  return (
    <>
    
    <div className='min-h-screen flex justify-center items-center bg-violet-400'>
        <LuVolleyball 
        className=' h-[100px] w-[100px] animate-bounce  text-yellow-500' />
         <div className='text-center'>
          <h1 
          className='text-4xl text-white animate-bounce font-bold bg-black pt-2 pb-3 pl-2 pr-2 rounded-[20px]'>ChatApp</h1>
          </div>
    </div>
    </>
  )
}

export default Loader