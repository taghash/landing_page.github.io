import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/DealFlow/Banner'
import Footer from '../components/Footer'
import { dealFlowInfo } from '../helpers/dealFlowInfo'
import Card from '../components/DealFlow/Card'

const Dealflow = () => {
  return (
    <div className="">
      <Head>
        <title>DealFlow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <div className='grid md:grid-cols-2 p-10 gap-5 bg-[#ffff]'>
        {dealFlowInfo.map(item => <Card title={item.title} body={item.body} image={item.image} />)}
      </div>
      <Footer/>
    </div>
  )
}

export default Dealflow