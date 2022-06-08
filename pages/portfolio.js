import React from 'react'
import Header from '../components/Header'
import Banner from '../components/ProductBanner';
import placeholder from '../public/Ellipse.svg'
import {portfolioInfo} from '../helpers/Info'
import Card from '../components/Card';
import Footer from '../components/Footer';
import Head from 'next/head';

const portfolio = () => {
  return (
    <div>
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
    </div>
  )
}

export default portfolio