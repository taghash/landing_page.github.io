import React from 'react'
import { familyInfo } from '../../helpers/Info';
import Member from './Member';


const Family = () => {
  return (
    <div className='p-10 '>
        <h5 className='text-center mb-10 text-[32px] font-medium'>Our happy family</h5>
        <div className='grid md:grid-cols-3 px-20'>
            {familyInfo.map(item => <Member image={item.image} name={item.name} designation={item.designation} linkedIn={item.linkedIn} twitter={item.twitter} />)}
        </div>
    </div>
  )
}

export default Family