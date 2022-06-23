import Head from 'next/head';
import React from 'react'
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Banner from '../components/ProductBanner';
import { lpInfo } from '../helpers/Info';
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

const lpreporting = () => {
  return (
    <motion.div variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
      <Head>
            <title>Limited Partner Reporting</title>
        </Head>
        <Header/>
        <Banner  
            title='L P Reporting'
            desc='Create DIY Reports with metrics and charts from all the departments in the organization with qualitative and quantitative analysis laid on top. Brand your reports and track opens.'
            image={placeholder}
        />
        <div className='grid md:grid-cols-2 p-10 gap-5 bg-[#ffff]'>
            {lpInfo.map(item => <Card title={item.title} body={item.body} image={item.image} />)}
        </div>
        <Footer/>
    </motion.div>
  )
}

export default lpreporting