
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
                        Currently, I work as a Web Developer Apprentice at The Knowledge House (TKH). In this 
                        apprenticeship, my contributions are also an extension of one of my ongoing goals: to 
                        deepen my understanding of the software engineering profession, and to creatively build 
                        and improve digital products that contributes to the accessibility and utility of information for all.
                    </p>
                </div>
            </section>
        </>
    )
}

export default About;
