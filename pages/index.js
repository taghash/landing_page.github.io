import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/home/Banner'
import TopCustomers from '../components/home/TopCustomers'
import LearnMore from '../components/home/LearnMore'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Taghash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <TopCustomers/>
      <LearnMore/>
      <Footer/>
    </div>
  )
}

export default Home
