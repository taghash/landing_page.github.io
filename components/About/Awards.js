import Image from 'next/image';
import React from 'react'
import placeholder from '../../public/Ellipse.svg'

const Awards = () => {
  return (
    <div className='p-10 text-center'>
        <h3 className='text-[#050B30] font-semibold text-[20px] md:text-[32px] mb-4'>Awards and recognition</h3>
        <p>Et etiam et luctus egestas non dolor cras. Purus, faucibus metus arcu blandit risus elit orci, tortor. Aliquet leo malesuada ultrices a vestibulum, ultrices.</p>
        <div className='flex flex-col ml-20  mt-10 md:flex-row md:mt-20 md:justify-around'>
            <div className='w-2/3 md:w-1/6 mb-5'>
                <Image src={placeholder} />
            </div>
            <div className='w-2/3 md:w-1/6 mb-5'>
                <Image src={placeholder} />
            </div>
            <div className='w-2/3 md:w-1/6 mb-5'>
                <Image src={placeholder} />
            </div>
        </div>
    </div>
  )
}

export default Awards