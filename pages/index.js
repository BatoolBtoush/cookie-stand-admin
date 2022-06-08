import Head from 'next/head'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import {useState} from 'react'


function Home() {
   

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <Main cookieStands={cookieStands} cookieStandsCount={cookieStandsCount} createCookieStand={createCookieStand} />
      <Footer />    
    </>

  )
}


export default Home
