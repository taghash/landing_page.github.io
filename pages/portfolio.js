import React from 'react'
import Header from '../components/Header'
import Banner from '../components/ProductBanner';
import placeholder from '../public/Ellipse.svg'
import {portfolioInfo} from '../helpers/Info'
import Card from '../components/Card';
import Footer from '../components/Footer';
import Head from 'next/head';
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

const portfolio = () => {
  return (
    <motion.div variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
      <Head>
            <title>Portfolio</title>
        </Head>
        <Header/>
        <Banner
            title='Portfolio management' 
            desc='Centrally track your portfolio’s MIS, Investment and Valuation metrics. Improve governance in your portfolio by automatically detecting discrepancies in investor updates.'
            image={placeholder}
        />
        <div className='grid md:grid-cols-2 p-10 gap-5 bg-[#ffff]'>
            {portfolioInfo.map(item => <Card title={item.title} body={item.body} image={item.image} />)}
        </div>
        <Footer/>
    </motion.div>
  )
}

export default portfolio