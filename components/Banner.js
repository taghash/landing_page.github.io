import React from 'react'
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


const Banner = ({page, title, body}) => {
  return (
    <motion.div className='bg-neutral-100 p-10 md:p-20 text-center' variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
        <p className='font-bold text-[#206CFF] text-[15px]'>{page}</p>
        <h3 className='text-[28px] text-extrabold text-[#050B30] mb-5 md:text-[48px]'>{title}</h3>
        <p className='mb-5 text-[#050B30] text-[15px] font-normal px-0 lg:px-60'>{body}</p>
    </motion.div>
  )
}

export default Banner