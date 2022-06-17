import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/home/Banner'
import TopCustomers from '../components/home/TopCustomers'
import LearnMore from '../components/home/LearnMore'
import Footer from '../components/Footer'
import ProductDeatails from '../components/home/ProductDetails'
const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Taghash - One-stop solution for VC/PE & Family Offices</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <TopCustomers/>
      {/* <ProductDeatails/> */}
      <LearnMore/>
      <Footer/>
    </div>
  )
}

export default Home
