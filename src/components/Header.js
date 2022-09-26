import React from 'react'

export default function Header({aboutPage,pageSwitch}) {
  return (
    <div className='header'>
        <h1 className='headerSelect' onClick={()=>pageSwitch(2)}>Stephen OMarrah</h1>
        <h2 className='headerSelect'onClick={()=>pageSwitch(1)}>Projects</h2>
        <h2 className='headerSelect'onClick={()=>pageSwitch(2)}>About</h2>
        <h2 className='headerSelect' onClick={()=>pageSwitch(3)}>Contact</h2>
    </div>
  )
}
