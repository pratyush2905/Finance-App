import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white p-16 px-4 text-black'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop pic" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Anaytics Centrally</h1>
          <p className=''>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quisquam excepturi, natus modi quis iusto distinctio recusandae voluptatibus.
          </p>
          <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] border'>
            Get Started
            </button>
        </div>
      </div>
    </div>
  )
}

export default Analytics