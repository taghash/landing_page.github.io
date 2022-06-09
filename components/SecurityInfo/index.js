import Image from 'next/image';
import React from 'react'


const index = ({image, title, desc}) => {
  return (
      <div className='grid  lg:flex mb-5'>
          <div className='w-20'>
              <Image src={image} />
          </div>
          <div className='flex flex-col mt-5 lg:ml-5'>
              <h5 className='text-[15px] font-medium'>{title}</h5>
              <p className='text-[12px] text-[#6C708D]'>{desc}</p>
          </div>
      </div>
  )
}

export default index