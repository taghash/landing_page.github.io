import Image from 'next/image';
import React from 'react'

const Card = ({title, body, image, imageStyles,style}) => {
  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl">
    <div className={`${imageStyles}`}>
        <Image src={image} className={`rounded-t-lg ${imageStyles}`} />
    </div>
    <div className={`p-7 ${style}`}>
        <h5 class="mb-4 text-[20px] font-medium tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p class="mb-3 font-normal text-[14px] text-[#6C708D]">{body}</p>
    </div>
</div>
  )
}

export default Card