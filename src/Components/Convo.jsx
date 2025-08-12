import React from 'react'
import './Convo.css'
import Navbar from  './Navbar'
import ConvoHero from './ConvoHero'
import Info from './Info'
import Benefit from './Benefit'
import AboutConvo from './AboutConvo'
import GetStarted from './GetStarted'
import Footer from './Footer'

const Convo = () => {
  return (
    <div>
        <Navbar/>
        <ConvoHero/>
        <Info/>
        <Benefit/>
        <AboutConvo/>
        <GetStarted/>
        <Footer/>
    </div>
  )
}

export default Convo
