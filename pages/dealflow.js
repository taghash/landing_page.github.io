import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/ProductBanner'
import Footer from '../components/Footer'
import { dealFlowInfo } from '../helpers/Info'
import Card from '../components/Card'
import placeholder from '../public/Ellipse.svg'
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

const Dealflow = () => {
  return (
    <motion.div className="" variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
      <Head>
        <title>DealFlow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner 
        title='Dealflow management'
        desc='Bring your deals from Email, Whatsapp, Pitch forms into a single portal. Collaborate, communicate and close seamlessly.'
        image={placeholder}
        />
      <div className='grid lg:grid-cols-3 md:grid-cols-2 p-10 gap-10 bg-[#ffff]'>
        {dealFlowInfo.map(item => <Card title={item.title} body={item.body} image={item.image} />)}
      </div>
      <Footer/>
    </motion.div>
  )
}

export default Dealflow