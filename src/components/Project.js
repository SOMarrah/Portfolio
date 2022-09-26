
import { ProjectData } from './ProjectData';
import { useState } from 'react';
import {AiOutlineLeftCircle, AiOutlineRightCircle} from 'react-icons/ai'


export default function Project (props) {
    const linkInNewTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer')
        return console.log(`Opening a link to: ${url}`);;
      };
     
      const [current, setCurrent] = useState(0);
      const length = ProjectData.length

     
      const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
      }

      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1)
      }
      if(!Array.isArray(ProjectData) || ProjectData.length <=0){
        return null;
      }

    return(
        <div> 
            <AiOutlineLeftCircle className='left-arrow' onClick={prevSlide}/>
            <AiOutlineRightCircle className='right-arrow' onClick={nextSlide}/>
            <div>
               
                {/* <!-- A div with card class for the card  --> */}
                {ProjectData.map((slide, index)=>{
                    return(
                        <div  className={index === current ? 'slides active' : null} key={index} >
                            {index === current && 
                                <>
                                    <h6>{slide.title}</h6>
                                    <div className='tag'>
                                    {slide.languages.map((lang, index)=>{
                                        return(
                                           <div key={index} className='tagContainer' >
                                            {lang}
                                            </div>
                                            )
                                        })}
                                        </div>
                                    <div className='sideBySide'>
                                    <img className='projectImage' src={slide.image} alt={slide.name}/>
                                    <p className='projectDesc'>{slide.description}
                                    <br/>
                                    <br/>   
                                    <a className='projectLinks' onClick={(e) =>linkInNewTab(slide.github)}>GitHub</a>
                                    <br/>
                                    {slide.liveLink? <a className='projectLinks'onClick={(e) =>linkInNewTab(slide.liveLink)}>Live Link</a> : null}</p>
                                   
                                    </div>
                                    </>
                         }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}