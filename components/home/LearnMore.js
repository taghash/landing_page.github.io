import Image from 'next/image';
import React from 'react'
import placeholder from '../../public/placeholder.svg'

const LearnMore = () => {
  return (
    <div className='grid p-5 pt-1 pb-1 md:grid-cols-2 md:pl-40 mt-10 bg-[#6C708D] gap-0 md:gap-10 lg:gap-0'>
        <div className='mt-10 mb-5 w-full xl:w-1/2'>
            <Image src={placeholder} className='' />
        </div>
        <div className='pt-0 md:pt-20 pb-5 '>
            <h5 className='text-white font-bold text-2xl pb-3'>Want to learn more?</h5>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat atque ab molestias quo at ducimus provident ex expedita modi quidem.</p>
            <a
              href="#"
              className="mt-5 whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-md  text-base font-medium text-[#206cff] bg-white " 
            >
              Request Demo
            </a>
        </div>
    </div>
  )
}

export default LearnMore