import React from 'react'
import Awards from '../components/About/Awards';
import Banner from '../components/Banner';
import Family from '../components/About/Family';
import Footer from '../components/Footer';
import ValueVision from '../components/About/ValueVision';
import Header from '../components/Header'
import Head from 'next/head';

const about = () => {
  return (
    <div>
        <Head>
            <title>About Us</title>
        </Head>
        <Header/>
        <Banner title='Rebels with a cause' page='ABOUT US' body='Et etiam et luctus egestas non dolor cras. Purus, faucibus metus arcu blandit risus elit orci, tortor. Aliquet leo malesuada ultrices a vestibulum, ultrices.'  />
        <Family/>
        <ValueVision/>
        <Awards/>
        <Footer />
    </div>
  )
}

export default about