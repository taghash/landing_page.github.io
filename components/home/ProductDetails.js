import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import placeholder1 from '../../public/Ellipse.svg'
import placeholder2 from '../../public/Rectangle.svg'

const ProductDetails = () => {
    const [image, setImage] = useState(placeholder1)

    useEffect(()=> {
        console.log(window.scrollY)
        window.scrollY === 50 && setImage(placeholder2)
    },[])
  return (
    <div className='grid grid-cols-2'>
        <div>
            <Image src={image}/>
        </div>
        <div>
            <h3>sdasdsad</h3>
            <p>saohdaoshdosa</p>
        </div>
    </div>
  )
}

export default ProductDetails