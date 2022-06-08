import Head from 'next/head';
import React from 'react'
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Banner from '../components/ProductBanner';
import { fundInfo } from '../helpers/Info';
import placeholder from '../public/Ellipse.svg'

const fund = () => {
  return (
    <div>
      <Head>
            <title>Fund Management</title>
        </Head>
        <Header/>
        <Banner 
            title='Fund management'
            desc='Track your fund’s performance across multiple funds, currencies and investments across the lifetime of your fund.'
            image={placeholder}
        />
        <div className='grid md:grid-cols-2 p-10 gap-5 bg-[#ffff]'>
            {fundInfo.map(item => <Card title={item.title} body={item.body} image={item.image} />)}
        </div>
        <Footer/>
    </div>
  )
}

export default fund