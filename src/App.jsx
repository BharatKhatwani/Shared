import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Hero from "./Components/Hero/Hero.jsx"
import Slider from "./Components/Slider/Slider.jsx"
function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Slider/>
    </>
  )
}

export default App
