import {useRef, useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Components
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'
// import Projects from './components/Projects.jsx'

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
  const [flickColor, setFlickColor]= useState(false)

  const bodyElement = useRef()  
  const rootElement = useRef()
  const clickBtnElement = useRef()

  let getText;

  useEffect(() => {
    bodyElement.current = document.body;
    rootElement.current = document.querySelector('#root');
    // clickBtnElement.current = document.querySelector('.visual-btn--mobile')
  }, [])

  useEffect(() => {
    if(flickColor){
      console.log('it is now true')
      // bodyElement.current.style.backgroundColor = 'lightblue'
      // bodyElement.current.style.backgroundImage = "url('../src/assets/background-images/black-squares-edit.jpg')"
      // "url('path_to_your_image')"
      // bodyElement.current.style.backgroundRepeat = 'no-repeat'
      // rootElement.current.style.backgroundColor = 'black'
      // console.log(flickColor)

      // bodyElement.current.style.backgroundColor = 'black'
      bodyElement.current.style.backgroundColor = '#252222'

      // clickBtnElement.current.style.innerText  = 'light mode'
      // getText = clickBtnElement.current.style.innerText
      console.log(clickBtnElement)
    }else{
      console.log('it is now false')
      //with this color (which is by default) will show up inline when inspecting
      bodyElement.current.style.backgroundColor = ''
      bodyElement.current.style.backgroundImage = ""
      // clickBtnElement.current.style.innerText  = 'dark mode'
      // getText = clickBtnElement.current.style.innerText
    }


      // Verify that the selector targets the correct element
  // clickBtnElement.current = document.querySelector('.visual-btn--mobile');

  // Check if the element is found


    // Check if the property 'textContent' exists
  
  /*
    if ('textContent' in clickBtnElement.current) {
      // Modify the text content of the button
      if(flickColor){
        clickBtnElement.current.textContent = 'light mode';
        getText = 'light mode'
      }else{
        clickBtnElement.current.textContent = 'dark mode';
        getText = 'dark mode'
      }
      // clickBtnElement.current.textContent = flickColor ? 'light mode' : 'dark mode';
    } else {
      console.error('Property textContent not found on button element.');
    }

    */

    
  },[flickColor])



  const navBtn = () => {
    console.log('clicked')
    setIsShown((initalValue) => !initalValue)
  }

  console.log('ham-menu-btn', isShown)

  const testingBtn = () => {
    console.log('click here')
    setFlickColor(initalColor => !initalColor)
  }

  console.log('color-btn', flickColor)

  const NavBar = () => {
      // background-image: url("gradient_bg.png");

    return (
      <header>
      <div className='header__mobile header__tablet'>
          <h2 className='header__h2'>davonbl</h2>
          <button id='testingBtn' className='visual-btn--mobile' onClick={testingBtn}>{flickColor?'dark mode' : 'light mode'}</button>

          <button className='btn-none hamburger-btn-mobile' onClick={navBtn}>
            <span className='hamburger-logo'>
              &#9776;
            </span>
          </button>

          <nav className={`nav-bar nav-bar-tablet`}>
            <ul>
              <li className='toc-nav'><Link to ='/'>Home</Link></li>
              <li className='toc-nav'><Link to ='/about'>About</Link></li>
              {/* <li className='toc-nav'><Link to ='/skills'>Skills</Link></li> */}
              {/* <li className='toc-nav'><Link to ='/contact'>Contact</Link></li> */}
            </ul>
            <button className='visual-btn--tablet' onClick={testingBtn}>{flickColor?'dark mode' : 'light mode'}</button>
          </nav>
      </div>
      <nav className={`nav-bar nav-bar-mobile ${isShown? 'open' : ''}`}>
          <ul>
            <li className='toc-nav'><Link to ='/'>Home</Link></li>
            <li className='toc-nav'><Link to ='/about'>About</Link></li>
            {/* <li className='toc-nav'><Link to ='/skills'>Skills</Link></li> */}
            {/* <li className='toc-nav'><Link to ='/contact'>Contact</Link></li> */}
          </ul>
          <button className='visual-btn--tablet' onClick={testingBtn}>Click</button>
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

          {/* <Route path='/contact' element={

            <Contact
              email = 'davonbl@gmail.com'
              link = 'https://www.linkedin.com/in/davonbl/'
            />}
          
          /> */}


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
              skillsThreeWidth= {'33%;'}
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
              skillThreeWidth1={'111%;'}
              />
            </>
          }
          />

          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
