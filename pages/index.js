import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import TopCustomers from '../components/TopCustomers'
import LearnMore from '../components/LearnMore'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
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
