
import pokemonGif from '../assets/gif-files/starter-pokemon.gif'
import bookstoreGif from '../assets/gif-files/bookstore-compass.gif'

import '../assets/styles/Projects.css'

const Projects = () => {

    return (
        <section className="projects">
            <h2 className='projects__section-name'>Featured Projects</h2>
            <div className="projects__all projects__one">
                <img className='projects__image' src={pokemonGif}/>
                <span>Starter Pokemon</span>
            </div>
            <div className="projects__all projects__two">
                <img className='projects__image' src={bookstoreGif}/>
                <span>Bibliophile's Compass</span>
            </div>

            {/* <div className="projects--all projects--two">
                <img src=""/>
                <span></span>
            </div> */}
        </section>
    )
}

export default Projects; 