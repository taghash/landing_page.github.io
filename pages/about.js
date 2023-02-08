import React from 'react';
import Awards from '../components/About/Awards';
import Banner from '../components/Banner';
import Family from '../components/About/Family';
import Footer from '../components/Footer';
import ValueVision from '../components/About/ValueVision';
import Header from '../components/Header';
import TopCustomers from '../components/home/TopCustomers';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Services from '../components/About/Services';
import Testimonials from '../components/About/Testimonials';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { ease: 'easeIn' },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeOut' },
  },
};

const about = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>About Us</title>
      </Head>
      <Header />
      <Banner
        title="Rebels with a cause"
        page="ABOUT US"
        body="Et etiam et luctus egestas non dolor cras. Purus, faucibus metus arcu blandit risus elit orci, tortor. Aliquet leo malesuada ultrices a vestibulum, ultrices."
      />
      <TopCustomers />
      <Services />
      <Testimonials />
      {/* <ValueVision/>
        <Awards/> */}
      <Footer />
    </motion.div>
  );
};

export default about;
