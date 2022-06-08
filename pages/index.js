import Head from 'next/head'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import {useState} from 'react'


function Home() {
  const [cookieStands, setCookieStands] = useState('')

  function createCookieStandsHandler(event) {
      event.preventDefault();
      const cookieStands = {
          Location: event.target.location.value,
          Minimum: event.target.minCustomer.value,
          Maximum: event.target.maxCustomer.value,
          Average: event.target.avgCookie.value,
      }

      setCookieStands(cookieStands)
  }
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <Main createCookieStandsHandler={createCookieStandsHandler}/>
      <p className="text-center">{JSON.stringify(cookieStands)}</p>
      <Footer />    
    </>

  )
}


export default Home
