import React from 'react'
import Awards from '../components/About/Awards';
import Banner from '../components/About/Banner';
import Family from '../components/About/Family';
import Footer from '../components/Footer';
import ValueVision from '../components/About/ValueVision';
import Header from '../components/Header'

const about = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Family/>
        <ValueVision/>
        <Awards/>
        <Footer />
    </div>
  )
}

export default about