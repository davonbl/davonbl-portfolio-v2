import '../assets/styles/Skills.css'
const Skills = (props) => {

    const skillOne = props.skillOne;
    const skillOneImg = props.skillOneImg
    const skillTwo = props.skillTwo;
    const skillTwoImg = props.skillTwoImg;
    const skillThree = props.skillThree
    const skillThreeImg = props.skillThreeImg

    const skillThreeWidth = props.skillThreeWidth; 
    const skillThreeWidth1 = props.skillThreeWidth1; 


    return (
        <div className='skills'>

            <div className="skills-section">


                <div className="skills-section-container">
                    <div className="skills-section-logo">
                        {/* <!-- The SVG file will placed here --> */}
                        <img 
                            className ="skills-section--image" 
                            src={skillOneImg} 
                            alt='image of logo'
                            style={{width: skillThreeWidth}}
                        />
                    </div>
                    <p className="skills-section-title">{skillOne}</p>
                </div>

                <div className="skills-section-container">
                    <div className="skills-section-logo">
                        {/* <!-- The SVG file will placed here --> */}
                        <img 
                            className ="skills-section--image" 
                            src={skillTwoImg} 
                            alt='image of logo'
                            
                        />
                    </div>
                    <p className="skills-section-title"> {skillTwo}</p>
                </div>

                <div className="skills-section-container">
                    <div className="skills-section-logo">
                        <img 
                            className ="skills-section--image" 
                            src={skillThreeImg} 
                            alt='image of logo'
                            style={{width: skillThreeWidth1}}
                            // style={{width:"33%"}} 
                        />
                    </div>
                    <p className="skills-section-title"> {skillThree}</p>
                </div>

            </div>
        </div>
    )
}

export default Skills; 