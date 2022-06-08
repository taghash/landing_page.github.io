import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/ProductBanner'
import Footer from '../components/Footer'
import { dealFlowInfo } from '../helpers/Info'
import Card from '../components/Card'
import placeholder from '../public/Ellipse.svg'

const Dealflow = () => {
  return (
    <div className="">
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
      <div className='grid md:grid-cols-2 p-10 gap-5 bg-[#ffff]'>
        {dealFlowInfo.map(item => <Card title={item.title} body={item.body} image={item.image} />)}
      </div>
      <Footer/>
    </div>
  )
}

export default Dealflow