import React, {useState} from 'react'
import Project from './Project'
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Text from './Text';

export default function Home(props) {
    const [aboutPage, setAboutPage] = useState(true);
    const [projectPage, setProjectPage] = useState(false);
    const [contactPage, setContactPage] = useState(false);
    const pageSwitch = (page) => {
        if(page === 1){
            setProjectPage(true)
            setAboutPage(false)
            setContactPage(false)
        }else if(page ===2){
            setProjectPage(false)
            setAboutPage(true)
            setContactPage(false)
        }else if(page ===3){
            setProjectPage(false)
            setAboutPage(false)
            setContactPage(true)
        }
      }
  return (
    <>
    <Text {...props} >
    <div className='project'>
        <div className='projectContainer'>
            <Header pageSwitch={pageSwitch}/>
            {aboutPage && <About/>}
            {contactPage && <Contact/>}
            {projectPage && <Project/>}
        </div>
    </div>
    </Text>
    </>
  )
}
