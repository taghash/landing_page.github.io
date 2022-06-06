import Image from 'next/image';
import React from 'react'
import logo from '../public/Taghash.svg'

const Footer = () => {
  return (
    <div className='p-10 pt-20'>
        <div className='flex justify-around'>
            <div>
                <Image src={logo} />
            </div>
            <div className='flex flex-col'>
                <a href="">Dealflow Management</a>
                <a href="">Portfolio Management</a>
                <a href="">Fund Management</a>
                <a href="">Limited Partner Reporting</a>
            </div>
            <div className='flex flex-col'>
                <a href="">Pricing</a>
                <a href="">About Us</a>
                <a href="">Privacy & Security Centre</a>
                <a href="">Compare to alternatives</a>
            </div>
            <div className='flex flex-col'>
                <p>Get access to exclusive company building resources</p>
                <p>Email address</p>
                <div className='mt-5'>
                    <input type="text" placeholder='Enter your email address' className=' border-2 border-r-0 border-blue-500 p-2 outline-none rounded rounded-r-none' />
                    <a
                        href="#"
                        className="rounded-l-none whitespace-nowrap px-4   rounded-md  text-base font-medium text-white " style={{background: 'linear-gradient(90deg, hsl(231deg 89% 51%) 0%, hsl(210deg 100% 61%) 100%)', paddingBottom: '.7rem', paddingTop: '.7rem'}}
                    >
                        Subcribe
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer