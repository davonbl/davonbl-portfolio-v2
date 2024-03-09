import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'

import './App.css'

function App() {

  const [isShown, setIsShown] = useState(false)

  const navBtn = () => {
    console.log('clicked')
    setIsShown((initalValue) => !initalValue)
  }

  console.log(isShown)

  const NavBar = () => {
      
    return (
      <header>
        <button className='btn-none' onClick={navBtn}>&#9776;</button>
        <nav className={`nav-bar nav-bar-tablet ${isShown? 'open' : ''}`}>
          <ul>
            <li className='toc-nav'><Link to ='/'>Home</Link></li>
            <li className='toc-nav'><Link to ='/about'>About</Link></li>
            <li className='toc-nav'><Link to ='/skills'>Skills</Link></li>
            <li className='toc-nav'><Link to ='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
  



  return (
    <>
      <Router>
        <NavBar/>
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
