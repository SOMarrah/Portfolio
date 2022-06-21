import React from "react";
import Text from "./Text"



export default function SpellBook({...props}){
  
    return(
      <mesh position={[-10,3,4]} rotation={[-.8,-.6, -.5]} sprite>
        {/* <boxGeometry args={[4,3,.1]}/>
        <meshStandardMaterial color='red'/> */}
        <Text position={[-.1,1,.15]} sprite>
          {/* anything iside of this will be HTML because it is a property being passed to the parent {children} */}
          <div className='spellBook'>
          <h1></h1>
          </div>
        </Text>
      </mesh>
    )
  }