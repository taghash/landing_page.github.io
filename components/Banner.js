import Image from 'next/image';
import React from 'react'

const Banner = () => {
  return (
    <div className='p-20 flex bg-neutral-100 flex-col md:flex-row'>
        <div className='mt-12'>
            <h2 className='text-4xl pb-10 '>One Stop solution for PE/VC and Family Offices</h2>
            <div className='flex '>
            <input type="text" placeholder='Enter your email address' className=' border-2 border-r-0 border-blue-500 p-2 outline-none rounded rounded-r-none' />
            <a
                href="#"
                className="rounded-l-none whitespace-nowrap px-4 py-2  rounded-md  text-base font-medium text-white " style={{background: 'linear-gradient(90deg, hsl(231deg 89% 51%) 0%, hsl(210deg 100% 61%) 100%)'}}
            >
                Contact Sales
            </a>
            </div>
        </div>
        <div  style={{marginTop: '-5%'}}>
            <img src="https://taghash.io/landing-page/img/team.svg" alt="" className='w-6/10 sm:w-full sm:h-full' />
        </div>
    </div>
  )
}

export default Banner