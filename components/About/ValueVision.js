import Image from 'next/image';
import React from 'react'
import placeholder from '../../public/Ellipse.svg'

const ValueVision = () => {
  return (
    <div className='bg-[#6C708D] text-white p-10 grid md:grid-cols-2 gap-20 pt-20'>
        <div>
            <h3 className='text-[30px] font-semibold pb-5'>Our values and our vision</h3>
            <p className='text-[15px]'>Et etiam et luctus egestas non dolor cras. Purus, faucibus metus arcu blandit risus elit orci, tortor. Aliquet leo malesuada ultrices a vestibulum, ultrices. Et etiam et luctus egestas non dolor cras. Purus, faucibus metus arcu blandit risus elit orci, tortor. Aliquet leo malesuada ultrices a vestibulum, ultrices. Purus, faucibus metus arcu blandit risus elit orci, tortor. Aliquet leo malesuada ultrices a vestibulum, ultrices.</p>
        </div>
        <div className='flex flex-col justify-between'>
            <div className='flex align-middle justify-center'>
                <div className='w-1/5 md:w-1/11 lg:w-1/12 mr-5'>
                    <Image src={placeholder} />
                </div>
                <p className='mt-3'>Et etiam et luctuss.</p>
            </div>
            <div className='flex align-middle justify-center'>
                <div className='w-1/5 md:w-1/11 lg:w-1/12 mr-5'>
                    <Image src={placeholder} />
                </div>
                 <p className='mt-3'>Et etiam et luctuss.</p>
            </div>
            <div className='flex align-middle justify-center'>
                <div className='w-1/5 md:w-1/11 lg:w-1/12 mr-5'>
                    <Image src={placeholder} />
                </div>
                 <p className='mt-3'>Et etiam et luctuss.</p>
            </div>
            <div className='flex align-middle justify-center'>
                <div className='w-1/5 md:w-1/11 lg:w-1/12 mr-5'>
                    <Image src={placeholder} />
                </div>
                 <p className='mt-3'>Et etiam et luctuss.</p>
            </div>
        </div>
    </div>
  )
}

export default ValueVision