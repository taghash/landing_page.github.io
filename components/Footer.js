import Image from 'next/image';
import React from 'react'
import logo from '../public/Taghash.svg'
import twiitter from '../public/twitter.svg'
import linkedIn from '../public/linkedIn.svg'


const Footer = () => {
  return (
    <div className='p-10 pt-20 bg-[#F6F6FC]'>
        <div className='flex justify-around flex-col md:flex-row'>
            <div className='pb-5 md:pb-0 hover:opacity-80'>
                <Image src={logo} />
            </div>
            <div className='grid gap-5 text-[#050B30] font-medium pb-10 md:pb-0 '>
                <a href="" className='hover:opacity-80'>Dealflow Management</a>
                <a href="" className='hover:opacity-80'>Portfolio Management</a>
                <a href="" className='hover:opacity-80'>Fund Management</a>
                <a href="" className='hover:opacity-80'>Limited Partner Reporting</a>
            </div>
            <div className='grid gap-5 text-[#050B30] font-medium pb-10 md:pb-0'>
                <a href="" className='hover:opacity-80'>Pricing</a>
                <a href="" className='hover:opacity-80'>About Us</a>
                <a href="" className='hover:opacity-80'>Privacy & Security Centre</a>
                <a href="" className='hover:opacity-80'>Compare to alternatives</a>
            </div>
            <div className='flex flex-col'>
                <p className='text-[#6C708D]'>Get access to exclusive company building resources</p>
                <p className='mt-4 text-[#6C708D] font-bold'>Email address</p>
                <div className='mt-2 flex flex-row'>
                    <input type="text" placeholder='Enter your email address' className=' w-auto border-2 border-r-0 border-blue-500 p-2 outline-none rounded rounded-r-none' />
                    <a
                        href="#"
                        className="rounded-l-none  px-4   rounded-md  text-base font-medium text-white " style={{background: 'linear-gradient(90deg, hsl(231deg 89% 51%) 0%, hsl(210deg 100% 61%) 100%)', paddingBottom: '.7rem', paddingTop: '.7rem'}}
                    >
                        Subcribe
                    </a>
                </div>
            </div>
        </div>
        <div className='flex justify-center mt-5  '>
            <div className='mr-10 cursor-pointer hover:opacity-80'>
                <Image src={twiitter}  />
            </div>
            <div className='cursor-pointer hover:opacity-80'>
                <Image src={linkedIn} />
            </div>
        </div>
        <div className='grid grid-cols-2 gap-10 md:grid-cols-6 px-20 pt-5 text-sm text-[#206CFF] '>
            <p className='text-black'>©Taghash</p>
            <a href="" className='hover:opacity-80'>Terms</a>
            <a href="" className='hover:opacity-80'>Security</a>
            <a href="" className='hover:opacity-80'>Privacy</a>
            <a href="" className='hover:opacity-80'>Help</a>
            <a href="" className='hover:opacity-80'>Contact Us</a>
        </div>
    </div>
  )
}

export default Footer