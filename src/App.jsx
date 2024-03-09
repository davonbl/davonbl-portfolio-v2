import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'

import './App.css'

function App() {

  const Navbar = () => {
    return (
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/skills'}>Skills</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
    )
  }



  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/skills' element={<Skills/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
