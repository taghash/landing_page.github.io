import Image from 'next/image';
import React from 'react'
import placeholder from '../../public/Ellipse.svg'

const Banner = () => {
  return (
    <div className='p-10 md:p-10 pt-0 md:pt-10 flex bg-neutral-100 flex-col md:flex-row md:justify-around'>
        <div className='mt-12'>
            <h2 className='text-2xl md:text-4xl pb-10 '>One Stop solution for <br/> PE/VC and Family Offices</h2>
            <div className='flex '>
            <input type="text" placeholder='Enter your email address' className=' w-3/4 border-2 border-r-0 border-blue-500 p-2 outline-none rounded rounded-r-none' />
            <a
                href="#"
                className="rounded-l-none whitespace-nowrap px-4 py-2  rounded-md  text-base font-medium text-white " style={{background: 'linear-gradient(90deg, hsl(231deg 89% 51%) 0%, hsl(210deg 100% 61%) 100%)'}}
            >
                Contact Sales
            </a>
            </div>
        </div>
        <div className='z-1 w-2/3 mt-5 ml-10 md:w-1/4'>
           <Image src={placeholder} />
        </div>
    </div>
  )
}

export default Banner