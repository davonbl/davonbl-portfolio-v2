import { Link } from "react-router-dom";
import '../assets/styles/Contact.css';

import github from '../assets/icons/GitHub.png'
import linkedIn from '../assets/icons/LinkedIn.png'
import mail from '../assets/icons/Mail.png'

const Contact = () => {

    // const email = props.email;
    // const link = props.link; 

    const emailLink = 'mailto: davonbl@gmail.com'
    const linkedInLink = 'https://www.linkedin.com/in/davonbl/'
    const githubLink = 'https://github.com/davonbl'

    // const github = props.github;
    // const linkedIn = props.linkedIn;
    // const mail = props.mail

    // const ShowEmail = () => <span style={{color: "#7eca54"}}>{email}</span>
    // const ShowLink= () => {
    //     return(
    //         <span> 
    //             <Link 
    //                 to = {link} 
    //                 target="_blank"
    //                 style={{color: "purple"}}>
    //                     LinkedIn 
    //             </Link>
    //         </span>
    //     )}

        
    return (
        <section className="contact">
            <h3 className="contact__section-name">Contact</h3>
            <p className="contact__info">
                Would you like to get in touch? Then lets break bread and chat. Here are 
                ways to contact me:
            </p>

            <div className="contact__sub-section">

                <div className="contact__icons">
                    <Link 
                        to = {githubLink} 
                        target="_blank">
                        <img className='contact__images contact__image-1' src = {github} alt="icon of the github website"/>
                    </Link>
                    <Link 
                        className="contact__logo-adjust"
                        to = {githubLink} 
                        target="_blank">
                        Github
                    </Link>
                </div>

                <div className="contact__icons">
                    <Link 
                        to = {linkedInLink} 
                        target="_blank">
                        <img className='contact__images contact__image-2' src = {linkedIn} alt="icon of the linkedIn website"/>
                    </Link>
                    <Link 
                        className="contact__logo-adjust"
                        to = {linkedInLink} 
                        target="_blank">
                        LinkedIn
                    </Link>
                </div>

                <div className="contact__icons">
                    <Link 
                        to = {emailLink} 
                        target="_blank">
                        <img className='contact__images contact__image-3' src = {mail} alt="icon of the linkedIn website"/>
                    </Link>
                    <Link 
                        className="contact__logo-adjust"
                        to = {emailLink} 
                        target="_blank">
                        email
                    </Link>
                </div>

            </div>


            <p className="contact__info">I will make sure to respond back at my earliest convenience.</p>
            {/* <p className="contact__page">
                Would you like to get in touch? Then lets break bread and chat. You can reach out to me 
                through <ShowLink/>, or by email at <ShowEmail/>. I will make sure to respond back at 
                my earliest convenience.
            </p> */}
        </section>
    )
}

export default Contact; 