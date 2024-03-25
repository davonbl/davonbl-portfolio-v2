import { Link } from 'react-router-dom'

import pokemonGif from '../assets/gif-files/starter-pokemon.gif'
import bookstoreGif from '../assets/gif-files/bookstore-compass.gif'
import hollowTreePng from '../assets/hollow-tree/hollow-tree-landing-page.jpg'

import '../assets/styles/Projects.css'

const Projects = () => {

    const bookstoreLink = 'https://github.com/davonbl/Bibliophile-s-Compass';
    const pokemonLink = 'https://github.com/davonbl/Starter-Pokemon'

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
                    <Link
                        to ={bookstoreLink}
                        target="_blank"
                        >
                    <span className='projects__square--link'>GITHUB</span>    
                    </Link>
                    
                </div>
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
        </section>
    )
}

export default Projects; 