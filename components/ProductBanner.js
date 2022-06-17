import Image from 'next/image';
import React from 'react'
import Placeholder from '../public/Ellipse.svg'
import {motion} from 'framer-motion'

const containerVariants = {
  hidden: { 
    opacity: 0,
    scale: .9 
  },
  visible: { 
    opacity: 1, 
    transition: {  duration: .7 },
    scale: 1
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeIn' }
  }
};


const Banner = ({title, desc, image}) => {
  return (
    <motion.div className='bg-neutral-100 p-10 md:p-20 grid md:grid-cols-2 md:gap-20' variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
        <div className='md:pt-10'>
            <p className='font-bold text-[#206CFF] text-[15px]'>PRODUCTS</p>
            <h3 className='text-[32px] text-bold text-[#050B30] mb-5 md:text-[48px]'>{title}</h3>
            <p className='mb-5 text-[#050B30] text-[15px] font-normal'>{desc}</p>
        </div>
        <div>
            <Image src={image} />
        </div>
    </motion.div>
  )
}

export default Banner