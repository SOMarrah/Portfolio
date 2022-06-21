import * as THREE from 'three'
import { useRef, useEffect, useFrame } from "react";
import { useThree } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";



export default function ProjectCamera(props){
    const camera2 = useThree((s) => s.camera);
    
    useEffect(() => {
      camera2.lookAt(-14,1.6,4)
      console.log("Project camera mounted");
      camera2.updateProjectionMatrix()
      return () => {
        console.log("Project camera unmounted");
      }
    }, [props.project, camera2]);
    const ref = useRef()
   
    // Update it every frame
    return(
      <OrthographicCamera {...props} ref={ref}/>
    )
  }