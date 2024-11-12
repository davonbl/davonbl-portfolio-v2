import {useRef, useState, useEffect} from 'react'
import { HashLink as SubLink } from "react-router-hash-link"
import { Link } from "react-router-dom";

import Resume from '../assets/resume/Davon_Blanks_Resume.pdf'

import '../assets/styles/Home.css'
import davonImg from '../assets/styles/images/dmb-larger.png'

import Projects from './Projects.jsx'

import Skills from './Skills.jsx'
import '../assets/styles/Skills.css'

import Contact from './Contact.jsx'

// import html5Logo from '../assets/svg-files/html5.svg'
import html5Logo from '../assets/png-and-jpg-files/html-5.png'
import sassLogo from '../assets/svg-files/sass-free.svg'
import css3Logo from '../assets/svg-files/css3-free.svg'

import javascriptLogo from '../assets/svg-files/javascript-free.svg'
import nodejsLogo from '../assets/svg-files/node-free.svg'
import reactjsLogo from '../assets/svg-files/react-free.svg'

import prismaLogo from '../assets/svg-files/prisma.svg'
import gitLogo from '../assets/svg-files/git-free.svg'
import githubLogo from '../assets/svg-files/github-free.svg'

import mySqlLogo from '../assets/svg-files/mysql-free.svg'
import postGresLogo from '../assets/svg-files/postgresql-free.svg'
import npmLogo from '../assets/svg-files/npm-free.svg'

import sequelizeLogo from '../assets/svg-files/sequelize.svg'
import nextJSLogo from '../assets/svg-files/nextjs.svg'
import postmanLogo from '../assets/svg-files/postman.svg'


const Home = () => {

    const contactSection = useRef();

    useEffect(() => {
        contactSection.current = document.querySelector('#contact')
    }, [])

    return (
        <div id='testing'>
            <main className='home'>
                <div className = 'home-main home-main-img'>
                    <img className = 'home-photo' src = {davonImg}/>
                </div>
                <div className = 'home-main home-main--info'>
                    <h1>
                        {/* Peace! My name is Davon Blanks and 
                        I am a Software Enginner in Training! */}
                        Peace, I'm Davon. Let's build and make a 
                        impact. 
                    </h1>
                    <div className='home__section--links'>
                        <SubLink 
                            to = '#contact' 
                            >
                            <span className='home__section--link--contact'>CONTACT</span>
                        </SubLink>
                        {/* <span className='home__section--link--contact'>CONTACT</span> */}
                        {/* <span className='home__section--link--resume'>RESUME</span> */}
                        <Link 
                            to={Resume}
                            download
                        // download={Resume}
                        // to = {githubLink} 
                        target="_blank">
                        <span className='home__section--link--resume'>RESUME</span>
                        </Link>
                        
                    </div>
                    {/* <span className='.home__section--link-contact'>COMING SOON</span>
                    <span className='.home__section--link--resume'>COMING SOON</span> */}
                    <p className = 'home-main__p'>
                        I am focusing on manifesting ideas into qualitative and scaleable software 
                        applications. I am also eager to collaborate with like-minded people to craft 
                        and implement solutions to various projects.
                    </p>
                </div>
            </main>

            <Projects />


            <div className='skills'>
                <h3 className='skills__section-name'>Skills</h3>
                
                <Skills
                  skillOne = { 'Javascript'}
                  skillOneImg= {javascriptLogo}
                  skillTwo = {'Next JS'}
                  skillTwoImg={nextJSLogo}
                  skillThree = { 'React JS'}
                  skillThreeImg = {reactjsLogo}
                  />

                <Skills
                  skillOne = {'Node JS'}
                  skillOneImg={nodejsLogo}
                  skillTwo = { 'HTML 5'}
                  skillTwoImg={html5Logo}
                  skillThree = {'CSS 3'}
                  skillThreeImg={css3Logo}
                />

                <Skills
                  skillOne = { 'SASS'}
                  skillOneImg = {sassLogo}
                  skillTwo = { 'Prisma'}
                  skillTwoImg = {prismaLogo}
                  skillThree = {'Sequelize'}
                  skillThreeImg = {sequelizeLogo}
                  />
                <Skills
                  skillOne = { 'MySql'}
                  skillOneImg = {mySqlLogo}
                  skillTwo = {'PostGresSql'}
                  skillTwoImg = {postGresLogo}
                  skillThree = { 'Postman'}
                  skillThreeImg = {postmanLogo}
                  />
                <Skills
                  skillOne = {'Git'}
                  skillOneImg = {gitLogo}
                  skillTwo = { 'Github'}
                  skillTwoImg = {githubLogo}
                  skillThree = { 'NPM'}
                  skillThreeImg = {npmLogo}
                  />
            </div>
            
            <Contact
                // email = 'davonbl@gmail.com'
                // link = 'https://www.linkedin.com/in/davonbl/'
            />

        </div>
    )
}

export default Home; 