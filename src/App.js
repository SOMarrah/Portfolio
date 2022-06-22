import * as THREE from 'three';
import React, {useEffect, useRef, Suspense, useState} from "react";
import "./styles.css";
import {Canvas, useFrame, useThree} from "@react-three/fiber";//imports the Canvas
import {OrbitControls, OrthographicCamera, PerspectiveCamera, softShadows} from "@react-three/drei";

//components

import SpellBook from "./components/Spellbook";
import Text from "./components/Text";
import magicBook from "./images/magicBook.png"
import Room2 from "./components/Room2"
import TestArea from "./components/TestArea";
import { RectAreaLight } from 'three';




softShadows();

//make a function that takes the onClick from the HTML element and moves the camera.

// function Camera(props){
//     return <OrthographicCamera {...props} />
// }
function ProjectCamera(props){
  const camera = useThree((s) => s.camera);
  const { get } = useThree(({get }) => ({ get}));
  useEffect(() => {
    if(get().camera.name === "ProjectCam"){
      console.log("Test!");
      camera.lookAt( -14 , 0, 0.5)
    }
    return () => console.log("unmounting project cam");
  }, [camera]);
  const projects = useRef()
 
  // Update it every frame
  useFrame(() => projects.current.updateMatrixWorld())
  return(
    <OrthographicCamera {...props} ref={projects} name="ProjectCam"/>
  )
}

function  SkillsCamera(props){
  const camera = useThree((s) => s.camera);
  const ref = useRef()
  const { get } = useThree(({get }) => ({ get}));
  useEffect(() => {
    if(get().camera.name === "SkillCam"){
      console.log("Skills");
      camera.lookAt(3.6,0,3.5);
      camera.rotateZ(Math.PI/3.0)
    }
    return () => console.log("unmounting skill cam")
  }, [camera]);
  // Update it every frame
  useFrame(() => ref.current.updateMatrixWorld())
  return(
    <OrthographicCamera {...props} ref={ref} name="SkillCam" />
  )
}

function AboutCamera(props){
  const camera = useThree((s)=>s.camera);
  const ref = useRef()
  const {get} = useThree(({get})=>({get}));
  useEffect(()=> {
    if(get().camera.name === "AboutCam"){
      console.log('About Camera')
      camera.lookAt(-6,1.5,5)
      
    }
    return () => console.log("unmounting about cam")
  }, [camera]);
  return(
    <OrthographicCamera {...props} ref={ref} name="AboutCam"/>
  )
}






export default function App() {
  const [project, setProject] = useState(false);
  const [controls, setControls] = useState(true);
  const [skills, setSkills] = useState(false);
  const [about, setAbout] = useState(false);
  const [start, setStart] = useState(false)

  const cameraProject = () => {
    if(project === false){
      setControls(false)
      setProject(true)
      return console.log("Switched Camera Projects")
    }else{
      setProject(false)
      setControls(true)
      return console.log("Switched Camera Default")
    }
  }
  const cameraSkills= () => {
    if(skills === false){
      setControls(false)
      setSkills(true)
      
      return console.log("Switched Camera Projects")
    }else{
      setSkills(false)
      setControls(true)
      return console.log("Switched Camera Default")
    }
  }
  
  const cameraAbout= () => {
    if(about === false){
      setControls(false)
      setAbout(true)
      setStart(true)
      return console.log("Switched Camera About")
    }else{
      setAbout(false)
      setStart(false)
      setControls(true)
      return console.log("Switched Camera Default")
    }
  }

  return (
      <Canvas shadows dpr={[1, 2]} >
        {/* <TestArea/> */}
        <directionalLight intensity={.04} position={[6.3,27,0]} color={'#c2c5cc'} castShadow/>
        <hemisphereLight intensity={0.125} color="blue" groundColor="white" />
        <pointLight position={[-5, 2.8, 0]} intensity={.4} color={"#586f6a"} castShadow/>
        <pointLight position={[3, 1.5, 3]} intensity={.2} color={"orange"} castShadow/>
        <ambientLight intensity={0.05} />
        <group>
        <OrthographicCamera
          makeDefault
          name="Default"
          position={[7, 6, 7]}
          zoom={85}
          near={-150}
          far={300}
        >
          <SpellBook />
          <mesh
            position={[-3, -3, 0]}
            rotation={[-0.8, -0.6, -0.5]}
          >
            <Text transform sprite position={[-0.1, 1, 0.15]}>
              {/* anything iside of this will be HTML because it is a property being passed to the parent {children} */}
              <div id="container">
                <div id="spells">
                  <div className="spellEffects" onClick={(e) => cameraAbout()}>
                    About
                  </div>
                  <div className="spellEffects" onClick={(e) => cameraSkills()}>
                    Skills
                  </div>
                  <div
                    className="spellEffects"
                    onClick={(e) => console.log("Contact")}
                  >
                    Contact
                  </div>
                  <div
                    className="spellEffects"
                    onClick={(e) => cameraProject()}
                  >
                    Projects
                  </div>
                </div>
                <div className="spellBook">
                  <img
                    src={magicBook}
                    height="100"
                    width="100"
                    alt="SpellBook"
                  />
                </div>
              </div>
            </Text>
          </mesh>
        </OrthographicCamera>
      </group>
      <Suspense fallback={null}>
            <Room2 scale={.5} position={[0,-2.5,0]} start={start} cameraAbout={cameraAbout} cameraProject={cameraProject} cameraSkills={cameraSkills}/>
            <Room2 scale={.03} position={[1.5,.9,3.4]}/>
            <Room2 position={[-30,-70,-68]} scale={10}/>
          </Suspense>
          <AboutCamera makeDefault={about} zoom={285} position={[-1, 1.2, 5.4]} />
          <SkillsCamera makeDefault={skills} zoom={1200} near={-20} position={[4.5,6,4.5]} left={window.innerWidth/-2} right={window.innerWidth/2} top={window.innerHeight/2} bottom={window.innerHeight/-2}/>
          <ProjectCamera makeDefault={project} zoom={395} position={[-3.7,1.6,0.6]}/>
          <OrbitControls makeDefault enabled={controls}
              minAzimuthAngle={-Math.PI/12}
              maxAzimuthAngle={Math.PI/2}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 3}
              enableZoom={true}
              enablePan={false}
              zoomSpeed={.8}
              minDistance={5}
              maxDistance={20}
              >
            </OrbitControls>
            
          {/* <gridHelper position={[0,-1,0]}args={[80,40]}/> */}
      </Canvas>
  );
}
