import '../assets/styles/Skills.css'
const Skills = ({skillOne, skillTwo, skillThree}) => {
    return (
        <>
            <div className="skills-section">

                <div className="">
                    <div className="">
                        {/* <!-- The SVG file will placed here --> */}

                    </div>
                    <p className="">{skillOne}</p>
                </div>

                <div className="">
                    <div className="">
                        {/* <!-- The SVG file will placed here --> */}
                    </div>
                    <p className=""> {skillTwo}</p>
                </div>

                <div className="skills-sass ">
                    <div className="">
                        {/* <!-- The SVG file will placed here --> */}
                    </div>
                    <p className=""> {skillThree}</p>
                </div>

            </div>
        </>
    )
}

export default Skills; 