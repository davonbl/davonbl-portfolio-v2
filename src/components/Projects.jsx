
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
                <img className='projects__image' src={hollowTreePng}/>
                <span>Hollow Tree</span>
            </div>
        </section>
    )
}

export default Projects; 