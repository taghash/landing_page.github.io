import Image from 'next/image';
import React from 'react'

const Card = ({title, body, image}) => {
  return (
    <div className='bg-[#F6F6FC] border border-[#f6f6fc] rounded-md lg:w-3/4 h-3/4 drop-shadow-xl hover:drop-shadow-2xl'>
        <div className='px-3 md:px-10 py-5'>
            <h3 className='text-[#050B30] text-[15px] md:text-[20px] font-bold pb-5'>{title}</h3>
            <p className='text-[14px] text-[#6C708D]'>{body}</p>
        </div>
        <div className='w-full pb-0'>
            <Image src={image} className='' />
        </div>
    </div>
  )
}

export default Card