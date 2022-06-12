import Head from 'next/head'
import Header from './components/Header'
import CreateForm from './components/CreateForm'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'


function Home() {
  const [counter, setCounter] = useState(0)

  const locationsHandler = (e) => {
    e.preventDefault()
    setCounter(counter + 1)
  }

    

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin App</title>
      </Head>
      <Header />
      <CreateForm locationsHandler = {locationsHandler}/>
      <Main />
      <Footer counter={counter} />

    </div>
  )
}

export default Home
