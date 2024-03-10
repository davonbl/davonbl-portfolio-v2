import '../assets/styles/Home.css'
import davonImg from '../assets/styles/images/dmb-larger.png'
const Home = () => {
    return (
        <>
            <main className='home'>
                <div className = 'home-main home-main-img'>
                    <img className = 'home-photo' src = {davonImg}/>
                </div>
                <div className = 'home-main home-main--info'>
                    <h1>
                        Peace! My name is Davon Blanks and 
                        I am a Software Enginner in Training!
                    </h1>
                    <p className = 'home-main__p'>
                        I am focusing on manifesting ideas into qualitative and scaleable software 
                        applications. I am also eager to collaborate with like-minded people to craft 
                        and implement solutions to various projects.
                    </p>
                </div>
            </main>
        </>
    )
}

export default Home; 