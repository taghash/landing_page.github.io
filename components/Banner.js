import React from 'react'

const Banner = ({page, title, body}) => {
  return (
    <div className='bg-neutral-100 p-10 md:p-20 text-center'>
        <p className='font-bold text-[#206CFF] text-[15px]'>{page}</p>
        <h3 className='text-[28px] text-extrabold text-[#050B30] mb-5 md:text-[48px]'>{title}</h3>
        <p className='mb-5 text-[#050B30] text-[15px] font-normal px-0 lg:px-60'>{body}</p>
    </div>
  )
}

export default Banner