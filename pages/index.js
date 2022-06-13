import Head from 'next/head'
import Header from './components/Header'
import CreateForm from './components/CreateForm'
import Main from './components/Main'
import ReportTable from './components/ReportTable'
import Footer from './components/Footer'
import { useState } from 'react'


function Home() {
  const [counter, setCounter] = useState(0)
  const [locations, setLocations] = useState([])

  const locationsHandler = (e) => {
    e.preventDefault()
    setCounter(counter + 1)
    
    let forTable = {
      location: e.target.location.value,
      minCustomer: e.target.minCustomer.value,
      maxCustomer: e.target.maxCustomer.value,
      avgCookie: e.target.avgCookie.value
      
    };
    setLocations([...locations, forTable])
    
  
  }

  
    
  

    

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin App</title>
      </Head>
      <Header />
      <CreateForm locationsHandler = {locationsHandler}/>
      <Main />
      <ReportTable locations = {locations} />
      <Footer counter={counter} />

    </div>
  )
}

export default Home
