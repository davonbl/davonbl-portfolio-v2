import { Link } from "react-router-dom";
import '../assets/styles/Contact.css';

const Contact = (props) => {

    const email = props.email;
    const link = props.link; 

    const ShowEmail = () => <span style={{color: "#7eca54"}}>{email}</span>
    const ShowLink= () => {
        return(
            <span> 
                <Link 
                    to = {link} 
                    target="_blank"
                    style={{color: "purple"}}>
                        LinkedIn 
                </Link>
            </span>
        )}
    return (
        <>
            <p className="contact-page">
                Would you like to get in touch? Then lets break bread and chat. You can reach out to me 
                through <ShowLink/>, or by email at <ShowEmail/>. I will make sure to respond back at 
                my earliest convenience.
            </p>
        </>
    )
}

export default Contact; 