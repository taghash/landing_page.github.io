import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/home/Banner'
import TopCustomers from '../components/home/TopCustomers'
import LearnMore from '../components/home/LearnMore'
import Footer from '../components/Footer'
import ProductDeatails from '../components/ProductsDetails'
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
    transition:{ease: 'easeOut'},
    
  }
};

const Home = () => {
  return (
    <motion.div className="" variants={containerVariants} initial='hidden' animate='visible' exit='exit' >
      <Head>
        <title>Taghash - One-stop solution for VC/PE & Family Offices</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <TopCustomers/>
      <ProductDeatails/>
      <LearnMore/>
      <Footer/>
    </motion.div>
  )
}

export default Home
