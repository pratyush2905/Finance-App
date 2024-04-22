import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white p-16 px-4 text-black'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop pic" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 sm:text-nowrap'>Drive Your Marketing Strategy with Precision</h1>
          <p className=''>
          Our expert data analysis at Success Catalyst is the key to a successful marketing strategy. We turn complex market data into clear insights, allowing you to make informed decisions. With our precision-driven approach, your campaigns are optimized for maximum impact. Harness the power of data and achieve your marketing objectives with us.
          </p>
          <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] border hover:bg-[#00df9a] hover:text-black'>
            Launching Soon!
            </button>
        </div>
      </div>
    </div>
  )
}

export default Analytics