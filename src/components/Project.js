import Text from './Text'

export default function Project (props) {
    return(
        <>
        <Text {...props}>
        <div className='project' > <button id="backButton" onClick={props.cameraProject}> Go Back</button>
           <div id="projectContainer">
                {/* <!-- A div with card class for the card  --> */}
                <div className="card">
                <img className='projectImage' src="https://ciechanow.ski/images/og/gears.jpg" alt="Temp"/>
                {/* <!-- A div with card__details class to hold the details in the card  --> */}
                <div className="card__details">
                    {/* <!-- Span with tag class for the tag --> */}
                    <span className="tag">Html</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                    {/* <!-- A div with name class for the name of the card --> */}
                    <div className="name">Project Name 1</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.</p>

                    <button>Check it out</button>
                </div>
                </div>
                <div className="card">
                <img className='projectImage' src="https://ciechanow.ski/images/og/gears.jpg" alt="Temp"/>
                {/* <!-- A div with card__details class to hold the details in the card  --> */}
                <div className="card__details">
                    {/* <!-- Span with tag class for the tag --> */}
                    <span className="tag">Html</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                    {/* <!-- A div with name class for the name of the card --> */}
                    <div className="name">Project Name 1</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.</p>

                    <button>Check it out</button>
                </div>
                </div>
                <div className="card">
                <img className='projectImage' src="https://ciechanow.ski/images/og/gears.jpg" alt="Temp"/>
                {/* <!-- A div with card__details class to hold the details in the card  --> */}
                <div className="card__details">
                    {/* <!-- Span with tag class for the tag --> */}
                    <span className="tag">Html</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                    {/* <!-- A div with name class for the name of the card --> */}
                    <div className="name">Project Name 1</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.</p>

                    <button>Check it out</button>
                </div>
                </div>
                <div className="card">
                <img className='projectImage' src="https://ciechanow.ski/images/og/gears.jpg" alt="Temp"/>
                {/* <!-- A div with card__details class to hold the details in the card  --> */}
                <div className="card__details">
                    {/* <!-- Span with tag class for the tag --> */}
                    <span className="tag">Html</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                    {/* <!-- A div with name class for the name of the card --> */}
                    <div className="name">Project Name 1</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.</p>

                    <button>Check it out</button>
                </div>
                </div>
            </div>
        </div>
        </Text>
        {/* </mesh> */}
        
        </>
    )
}