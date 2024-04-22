import React from 'react'
import { ReactTyped, Typed}  from "react-typed";


export const Hero = () => {
  return (
    <div className='text-white bg-black'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold py-2 md:p-0 '>ONE STOP SOLUTION FOR ALL YOUR MAREKTING PROBELMS</p>
            <h1 className='md:text-5xl sm:text-4xl text-xl font-bold mb-1 md:mb-1'>Your Marketing Success Starts Here</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold p-2'>Maximise your</p>
                <ReactTyped
                className='md:text-3xl sm:text-2xl text-xl font-bold md:pl-0 p-0 m-0 text-[#00df9a]' 
                strings={['IMPACT','PRESENCE','INFLUENCE','REVENUE']} 
                typeSpeed={120} 
                backSpeed={100} 
                loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-zinc-500'>Monitor and grow your growth,reach and  to increase revenue from multiple platforms.</p>
            <button className='bg-[#00000] w-[150px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white border border-white hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#00df9a,0_0_15px_#00df9a,0_0_30px_#00df9a] duration-500'>Coming Soon</button>
        </div>
    </div>
  )
}

export default Hero