import React, {useState} from "react";
import {Html} from "@react-three/drei";

// create a function to hold all HTML elements I want to display. Just import it into the object I want to use it in, and set the position. The {children} property is used to render all HTML properties put inside of it.


export default function Text({children, ...props}){
  // const [occluded, occlude] = useState()
    return(
      <Html 
      transform
      occlude
      // onOcclude={occlude}
      // style={{ transition: 'all 0.2s', opacity: occluded ? 0 : 1, transform: `scale(${occluded ? 0.25 : 1})` }}
      {...props}>
      {children}
      </Html>
    )
  }