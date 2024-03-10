

const Contact = (props) => {

    const email = props.email;

    const ShowEmail = () => <span style={{color: "#7eca54"}}>{email}</span>
    return (
        <>
            <p>
                Would you like to get in touch? Then lets break bread and chat. You can reach out to me 
                through LinkedIn, or by email at <ShowEmail/>. I will make sure to respond back at 
                my earliest convenience.
            </p>
        </>
    )
}

export default Contact; 