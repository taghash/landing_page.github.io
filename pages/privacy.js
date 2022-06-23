import React from 'react'
import Header from '../components/Header'
import Head from 'next/head';
import Banner from '../components/Banner';
import SecurityInfo from '../components/SecurityInfo'
import Footer from '../components/Footer'
import { securityInfo } from '../helpers/Info';
import {motion} from 'framer-motion'

const containerVariants = {
  hidden: { 
    opacity: 0,
  },
  visible: { 
    opacity: 1, 
    transition:{ease: 'easeIn'}
  },
  exit: {
    opacity: 0, 
    transition:{ease: 'easeOut'}
  }
};

const privacy = () => {
  return (
    <motion.div variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
        <Head>
            <title>PRIVACY & SECURITY CENTRE</title>
        </Head>
        <Header/>
        <Banner page='PRIVACY & SECURITY CENTRE' title='The rules we play by' body='Augue amet tortor feugiat tortor eget nunc ipsum vivamus arcu. Arcu scelerisque massa fames eu eget integer in posuere. Placerat rhoncus a sit tellus magna elit elit nisl. Quisque leo egestas mattis amet in quisque massa nunc. ' />
        <div className='grid md:grid-cols-2 md:gap-5 p-10'>
            {securityInfo.map(item => <SecurityInfo title={item.title} desc={item.desc} image={item.image} />)}
        </div>
        <Footer/>
    </motion.div>
  )
}

export default privacy