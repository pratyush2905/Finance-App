import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
const Cards = () => {
  return (
    <div className='bg-white w-full py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:shadow-gray-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white'src={Single} alt="Pic"/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 User Acess Granted</p>
                    <p className='py-2 border-b mx-8'>Data Transmission upto 2GB/s</p>
                </div>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3  text-black">Start Trial </button>
            </div>

            <div className='w-full shadow-xl shadow-gray-300 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent'src={Double} alt="Pic"/>
                <h2 className='text-2xl font-bold text-center py-8'>Partnerships</h2>
                <p className='text-center text-4xl font-bold'>$199</p>
                <div className='text-center'>
                    <p className='py-2 border-b mx-8 mt-8'>1TB Storage</p>
                    <p className='py-2 border-b mx-8'>2 User Acess Granted</p>
                    <p className='py-2 border-b mx-8'>Data Transmission upto 3.5GB/s</p>
                </div>
                <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3  text-[#00df9a]">Start Trial </button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:shadow-gray-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white'src={Triple} alt="Pic"/>
                <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                <p className='text-center text-4xl font-bold'>$299</p>
                <div className='text-center'>
                    <p className='py-2 border-b mx-8 mt-8'>5TB Storage</p>
                    <p className='py-2 border-b mx-8'>6 User Acess Granted</p>
                    <p className='py-2 border-b mx-8'>Data Transmission upto 5GB/s</p>
                </div>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3  text-black">Start Trial </button>
            </div>

        </div>
    </div>
  )
}

export default Cards