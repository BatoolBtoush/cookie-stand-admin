import Head from './components/Head'
import Header from './components/Header'
import CreateForm from './components/CreateForm'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'
import ReportTable from './components/ReportTable'


function Home() {
  const [counter, setCounter] = useState(0)
  const [locations, setLocations] = useState([])

  const locationsHandler = (e) => {
    e.preventDefault()
    setCounter(counter + 1)
    
    let forTable = {
      location: e.target.location.value,

      
    };
    setLocations([...locations, forTable])
    
  
  }

  
    
  

    

  return (
    <div>
      <Head />
      <Header />
      <CreateForm locationsHandler = {locationsHandler}/> 
      <Main />
      { counter > 0 ? <ReportTable locations = {locations} /> : <h1  className="text-center text-bold">No Cookie Stands Available</h1>}
      <Footer counter={counter} />

    </div>
  )
}

export default Home
