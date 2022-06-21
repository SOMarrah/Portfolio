import * as THREE from 'three'
import { useRef, useEffect, useFrame, useState } from "react";
import { useThree } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";



export default function  SkillsCamera(props){
    const camera1 = useThree((s) => s.camera);
    const ref = useRef()
    const lookAtPos = new THREE.Vector3( 20 , 0, 0)
    useEffect(() => {
      camera1.lookAt(lookAtPos);
      console.log("skills camera mounted");
      camera1.updateProjectionMatrix()
      return () => {
        console.log("skills camera unmounted");
      }
    }, [props.skills, camera1]);
    // Update it every frame
    
    return(
      <OrthographicCamera {...props} ref={ref}/>
    )
  }