import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'

// Image logos
import html5Logo from './assets/styles/images/html5.png'
import sassLogo from './assets/styles/images/sass-png.png'
import css3Logo from './assets/styles/images/css3.png'

import javascriptLogo from './assets/styles/images/javascript-png.png'
import nodejsLogo from './assets/styles/images/nodejs.png'
import reactjsLogo from './assets/styles/images/reactjs.png'

import prismaLogo from './assets/styles/images/prisma.png'
import gitLogo from './assets/styles/images/git.png'
import githubLogo from './assets/styles/images/github.png'


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
        <button className='btn-none' onClick={navBtn}>
          <span className='hamburger-logo'>
            &#9776;
          </span>
        </button>
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
          <Route path='/contact' element={
          <Contact
            email = 'davonbl@gmail.com'
            link = 'https://www.linkedin.com/in/davonbl/'
          />}/>
          <Route path='/' element={<Home/>}/>

          <Route path='/skills' element={
            <>
            <Skills
              skillOne = { 'HTML 5'}
              skillOneImg={html5Logo}
              skillTwo = {'CSS 3'}
              skillTwoImg={css3Logo}
              skillThree = { 'SASS'}
              skillThreeImg = {sassLogo}
            />
            <Skills
              skillOne = { 'Javascript'}
              skillOneImg= {javascriptLogo}
              skillTwo = {'Node JS'}
              skillTwoImg={nodejsLogo}
              skillThree = { 'React JS'}
              skillThreeImg = {reactjsLogo}
              />

            <Skills
              skillOne = { 'Prisma'}
              skillOneImg = {prismaLogo}
              skillTwo = {'Git'}
              skillTwoImg = {gitLogo}
              skillThree = { 'Github'}
              skillThreeImg = {githubLogo}
              />
            </>
          }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
