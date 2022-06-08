import Image from 'next/image';
import React from 'react'

const Member = ({image, name, designation, linkedIn, twitter}) => {
  return (
    <div className=''>
        <div className='w-full md:w-1/3'>
            <Image src={image} className='' layout='intrinsic'  />
        </div>
        <div className='flex flex-col justify-center align-middle'>
            <p className='font-bold text-[15px] '>{name}</p>
            <p className=' text-[12px] text-[#6C708D]'>{designation}</p>
            <div className='pt-3 flex justify-start pl-10 pb-5'>
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