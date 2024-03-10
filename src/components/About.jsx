
import dmbImg from '../assets/styles/images/dmb-in-pixel.png'
import '../assets/styles/About.css'

const About = () => {
    return (
        <>
            <section className='about-me'>
                <div className = 'about-me__photo'>
                    <img className = 'about-me__photo-edit' src ={dmbImg}/>
                </div>
                <div className='about-me__info'>
                    <p>
                        Peace! My name is Davon, an upcoming Software Engineer who is 
                        a native resident of New York City.
                    </p>
                    <p>
                        I began to engage with the web 3 ecosystem in late 2021. During that time, my 
                        observations of the social and economic impact of rapidly changing technologies 
                        during the COVID-19 pandemic also prompted my interest in the tech industry, with 
                        particular consideration for the challenges of those who are technologically disadvantaged. 
                        With this newfound enthusiasm, I pivoted away from my experiences in the service, academic 
                        and literary sectors, and focused in being part of the tech ecosystem at large.
                    </p>
                    <p>
                        Currently, I am a fellow with The Knowledge House (TKH) under the web development track. In 
                        this program, my aim is also an extension to one of my never-ending goals: to deepen my understanding 
                        of the software engineering profession and to creatively build and improve digital products that 
                        contributes to accessibility and utility of information to and for all.
                    </p>
                </div>
            </section>
        </>
    )
}

export default About;