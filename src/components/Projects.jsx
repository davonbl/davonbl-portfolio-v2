
import pokemonGif from '../assets/gif-files/starter-pokemon.gif'
import bookstoreGif from '../assets/gif-files/bookstore-compass.gif'
import hollowTreePng from '../assets/hollow-tree/hollow-tree-landing-page.jpg'

import '../assets/styles/Projects.css'

const Projects = () => {

    return (
        <section className="projects">
            <h2 className='projects__section-name'>Projects</h2>
            <div className="projects__all projects__one">
                <img className='projects__image' src={pokemonGif}/>
                <span>Starter Pokemon</span>
            </div>
            <div className="projects__all projects__two">
                <img className='projects__image' src={bookstoreGif}/>
                <span>Bibliophile's Compass</span>
            </div>

            <div className="projects__all projects__three">
                <img className='projects__image projects__image-three' src={hollowTreePng}/>
                <div className='overlay'>
                    <span className='projects__three-span'>Hollow Tree</span>
                </div>
                    
            </div>
        </section>
    )
}

export default Projects; 