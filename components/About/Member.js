import Image from 'next/image';
import React from 'react'

const Member = ({image, name, designation, linkedIn, twitter}) => {
  return (
    <div className=''>
        <div className='w-full md:w-1/3'>
            <Image src={image} className='' layout='intrinsic'  />
        </div>
        <div className='flex flex-col text-center md:text-left'>
            <p className='font-bold text-[15px] lg:pl-5'>{name}</p>
            <p className=' text-[12px] text-[#6C708D] lg:pl-5'>{designation}</p>
            <div className='pt-3 flex justify-start pl-10 md:pl-0 lg:pl-5  pb-5'>
                <div className='mr-5'>
                    <Image src={linkedIn} className='hover:opacity-80  cursor-pointer' />
                </div>
                <div>
                    <Image src={twitter} className='hover:opacity-80 cursor-pointer' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Member