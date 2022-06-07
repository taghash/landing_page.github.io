import Image from 'next/image';
import React from 'react'
import Beenext from '../../public/Beenext.svg'
import IndiaQuotient from '../../public/IndiaQuotient.svg'
import kalari from '../../public/kalaari.svg'
import Blume from '../../public/blume.svg'

const TopCustomers = () => {
  return (
    <div className='bg-[#F6F6FC]'>
        <h5 className='font-bold text-2xl text-center p-5'>Trusted by the best of the lot</h5>
        <div className='flex justify-around flex-col md:flex-row'>
            <Image src={Blume} />
            <Image src={IndiaQuotient} />
            <Image src={kalari} />
            <Image src={Beenext} />
        </div>
    </div>
  )
}

export default TopCustomers