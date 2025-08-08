import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import AiDetails from './AiDetails'
import FunctionList from './FunctionList'
import Plans from './Plans'
import GetStarted from './GetStarted'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AiDetails/>
      <FunctionList/>
      <Plans/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default Home
