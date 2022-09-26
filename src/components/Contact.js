import React from 'react'

export default function Contact() {
  const copyText = () => {

    navigator.clipboard.writeText("stephenomarrah@gmail.com");
    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: stephenomarrah@gmail.com";
  }
  const outFunc = () => {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }
  return (
    <div className='contactForm'>
    <h6 style={{color: 'darkblue'}}>Let's collaborate together!</h6>
    <p className='projectDesc'>
    <a href='https://www.linkedin.com/in/somarrah/' target="_blank">Message or Connect on Linkedin</a>
    <br/>
    <br/>
    <a href='https://github.com/SOMarrah' target="_blank">Check out my GitHub</a>
    <br/>
    <br/>
  
    </p>
    <div className='tooltip'>
      <button id='contactButton' onMouseOut={()=>outFunc()} onClick={()=>copyText()} >
       <span className='tooltiptext' id='myTooltip'>Copy to clipboard</span> 
        <span>Send me an Email</span></button>
    </div>
    </div>
  )
}
