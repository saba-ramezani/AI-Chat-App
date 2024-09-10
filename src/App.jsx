import { useState } from 'react'
import './App.css'
import { Navbar, Hero, Benefits, Collaboration, Services, Pricing, Roadmap, Footer } from './components'

function App() {

  return (
    <>
      <div className='overflow-hidden bg-dark-elliptical-gradient'>
        <Navbar />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
    </>
  )
}

export default App
