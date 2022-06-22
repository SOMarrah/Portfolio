import Text from './Text'
import FinallyRendered from '../images/FinallyRendered.png'
import piglatin from '../images/piglatin.png'
import rubygame from '../images/rubygame.png'
import tictactoe from '../images/tictactoe.png'


export default function Project (props) {
    const linkInNewTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer')
        return console.log(`Opening a link to: ${url}`);;
      };
    return(
        <>
        <Text {...props}>
        <div className='project' > <button id="backButton" onClick={props.cameraProject}> Go Back</button>
           <div id="projectContainer">
                {/* <!-- A div with card class for the card  --> */}
                <div className="card">
                
                {/* <!-- A div with card__details class to hold the details in the card  --> */}
                <div className="card__details">
                    {/* <!-- Span with tag class for the tag --> */}
                    <span className="tag">Html</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                    <div>
                    <span className="tag">React</span>
                    </div>
                    <img className='projectImage' src={FinallyRendered} alt="Portfolio"/>
                    {/* <!-- A div with name class for the name of the card --> */}
                    <button onClick={()=> linkInNewTab('https://github.com/SOMarrah/Portfolio')}>Portfolio</button>
                </div>
                </div>
                <div className="card">
                
                {/* <!-- A div with card__details class to hold the details in the card  --> */}
                <div className="card__details">
                    {/* <!-- Span with tag class for the tag --> */}
                    <span className="tag">Html</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                    <div>
                    <span className="tag">React</span>
                    </div>
                    <img className='projectImage' src={piglatin} alt="Swineslator"/>
                    {/* <!-- A div with name class for the name of the card --> */}
                    <button onClick={()=> linkInNewTab('https://codesandbox.io/s/swineslator-y93csv?file=/src/index.js')}>Swineslator</button>
                </div>
                </div>
                <div className="card">
                
                {/* <!-- A div with card__details class to hold the details in the card  --> */}
                <div className="card__details">
                    {/* <!-- Span with tag class for the tag --> */}
                    <span className="tag">Html</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                    <div>
                    <span className="tag">React</span>
                    </div>
                    <img className='projectImage' src={tictactoe} alt="Tic-Tac-Toe"/>
                    {/* <!-- A div with name class for the name of the card --> */}
                    <button onClick={()=> linkInNewTab('https://codesandbox.io/s/tic-tac-toe-czhrm2')}>Tic-Tac-Toe</button>
                </div>
                </div>
                <div className="card">
                
                {/* <!-- A div with card__details class to hold the details in the card  --> */}
                <div className="card__details">
                    {/* <!-- Span with tag class for the tag --> */}
                    <div>
                    <span className="tag">Ruby</span>
                    </div>
                    <img className='projectImage' src={rubygame} alt="Portfolio"/>
                    {/* <!-- A div with name class for the name of the card --> */}
                    <button onClick={()=> linkInNewTab('https://onlinegdb.com/N4az3gOjy')}>Blue Shirt Bandit</button>
                </div>
                </div>
                
                
                
            </div>
        </div>
        </Text>
        
        </>
    )
}