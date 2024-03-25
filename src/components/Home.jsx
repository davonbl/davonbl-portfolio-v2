// import {useRef, useState, useEffect} from 'react'

import '../assets/styles/Home.css'
import davonImg from '../assets/styles/images/dmb-larger.png'

import Projects from './Projects.jsx'

import Skills from './Skills.jsx'
import '../assets/styles/Skills.css'

import html5Logo from '../assets/svg-files/html5.svg'
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


const Home = () => {
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
                    <p className = 'home-main__p'>
                        I am focusing on manifesting ideas into qualitative and scaleable software 
                        applications. I am also eager to collaborate with like-minded people to craft 
                        and implement solutions to various projects.
                    </p>
                </div>
            </main>

            <Projects />


            <div className='skills'>
                <h3 style={{textAlign: "center"}}>Skills</h3>
                
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
                <Skills
                  skillOne = { 'MySql'}
                  skillOneImg = {mySqlLogo}
                  skillTwo = {'PostGresSql'}
                  skillTwoImg = {postGresLogo}
                  skillThree = { 'NPM'}
                  skillThreeImg = {npmLogo}
                  />
            </div>
        </div>
    )
}

export default Home; 