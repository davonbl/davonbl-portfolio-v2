import { Link } from 'react-router-dom'

import pokemonGif from '../assets/gif-files/starter-pokemon.gif'
import bookstoreGif from '../assets/gif-files/bookstore-compass.gif'
import careerspringGif from '../assets/gif-files/careerspring.gif'
import hollowTreePng from '../assets/hollow-tree/hollow-tree-landing-page.jpg'

import '../assets/styles/Projects.css'

const Projects = () => {

    const bookstoreLink = 'https://github.com/davonbl/Bibliophile-s-Compass';
    const pokemonLink = 'https://github.com/davonbl/Starter-Pokemon'
    const bibliophile_compass_link = 'https://bibliophile-compass.vercel.app/'
    const careerSpring = 'https://career-spring-interest-finder-sand.vercel.app/'

    

    return (
        <section className="projects">
            <h2 className='projects__section-name'>Projects</h2>
            <div className="projects__all projects__one">
                <img className='projects__image' src={pokemonGif}/>
                <span className='projects__name'>Starter Pokemon</span>

                <div className='projects__description'>
                    <p>
                        An responsive app where users can pick their 6 starter Pokémon of the day.
                    </p>
                    <Link
                            to ={pokemonLink}
                            target="_blank"
                            >
                        <span className='projects__square--link'>GITHUB</span>    
                    </Link>
                </div>

            </div>
            <div className="projects__all projects__two">
                <img className='projects__image' src={bookstoreGif}/>
                <span className='projects__name'>Bibliophile's Compass</span>
                <div className='projects__description'>
                    <p>
                        This application assists users in finding bookstores in the New York metropolitan area, 
                        and surrounding neighborhoods.
                    </p>
                <div className='projects_description--links'>
                    <Link
                        to ={bookstoreLink}
                        target="_blank"
                        >
                    <span className='projects__square--link'>GITHUB</span>    
                    </Link>
                    <Link
                        to ={bibliophile_compass_link}
                        target="_blank"
                        >
                    <span className='projects__square--link'> LIVE</span>    
                    </Link>
                </div>
                    
                </div>
            </div>

                <div className="projects__all projects__two">
                {/* src={} */}
                    <img className='projects__image' src={careerspringGif} alt='CareerSpring video gif'/>
                    <span className='projects__name'>CareerSpring</span>
                        <div className='projects__description'>
                            <p>
                             {/* This application provides upcoming and current low-income and/or first generation
                             college students an accessment survey of career prospects that aligns with their
                             interest.

                             An online networking and job placement platform for first generation/low-income college students 
                             working to unlock the economic and employment potential of first-generation college students. */}
                            
                             {/* This application offers an assessment survey of career prospects tailored for current 
                             and upcoming low-income and/or first-generation college students, reflecting their individual interests.
                             */}
                            
                            This collobralievy curated application provides low-income and/or first-generation
                            college students a survey to explore career prospects that match their interests.

                            </p>
                        <Link
                            to ={careerSpring}
                            target="_blank"
                        >
                        <span className='projects__square--link'>LIVE</span>    
                    </Link>
                </div>







            <div className="projects__all projects__three">
                <img className='projects__image projects__image-three' src={hollowTreePng}/>
                <div className='overlay'>
                    <span className='projects__name'>Hollow Tree</span>

                    <div className='projects__description'>
                        <p>
                            Hollow Tree, an upcoming NYC mobile app, helps users find nearby study spots with desired 
                            amenities like outlets, tables, wifi, and affordability.
                        </p>
                        {/* <Link
                        to ={bookstoreLink}
                        target="_blank"
                        >
                        <span className='projects__square--link'>GITHUB</span>    
                        </Link> */}
                        <span className='projects__square--link'>COMING SOON</span> 

                    </div>
                </div>
                {/* <Link
                    to ={pokemonLink}
                    target="_blank"
                    >
                    <span className='projects__square--link'>GITHUB</span>    
                </Link> */}

            </div>
                    
            </div>
        </section>
    )
}

export default Projects; 