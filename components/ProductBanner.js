import Image from 'next/image';
import React from 'react'
import Placeholder from '../public/Ellipse.svg'


const Banner = ({title, desc, image}) => {
  return (
    <div className='bg-neutral-100 p-10 md:p-20 grid md:grid-cols-2 md:gap-20'>
        <div className='md:pt-10'>
            <p className='font-bold text-[#206CFF] text-[15px]'>PRODUCTS</p>
            <h3 className='text-[32px] text-bold text-[#050B30] mb-5 md:text-[48px]'>{title}</h3>
            <p className='mb-5 text-[#050B30] text-[15px] font-normal'>{desc}</p>
        </div>
        <div>
            <Image src={image} />
        </div>
    </div>
  )
}

export default Banner