import * as THREE from 'three';
import React, {useEffect, useRef, Suspense, useState} from "react";
import "./styles.css";
import {Canvas, useFrame, useThree} from "@react-three/fiber";//imports the Canvas
import {OrbitControls, OrthographicCamera, PerspectiveCamera, Loader} from "@react-three/drei";

//components
import SpellBook from "./components/Spellbook";
import Text from "./components/Text";
import magicBook from "./images/magicBook.png"
import Room2 from "./components/Room2"
import TestArea from "./components/TestArea";
import { RectAreaLight } from 'three';




function Camera(props){
    return <OrthographicCamera {...props} />
}
function ProjectCamera(props){
  const camera = useThree((s) => s.camera);
  const { get } = useThree(({get }) => ({ get}));
  useEffect(() => {
    if(get().camera.name === "ProjectCam"){
      camera.lookAt( -14 , 0, 0.5)
    }
    return () => console.log("unmounting project cam");
  }, [get, camera]);
  const projects = useRef()
 
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

function Lantern(){
  const ref = useRef()
  useFrame((state, delta) => {
    const sin = Math.sin(state.clock.elapsedTime) + Math.cos(state.clock.elapsedTime * 3)
    ref.current.intensity = (0.1 +Math.abs(sin/10)) * 6
  })
  return(
    <spotLight 
      angle={.18} 
      ref={ref} 
      position={[3.8, 6.2, 4.1]}
      color={'orange'} 
      penumbra={1} 
      decay={2} 
      castShadow 
      power={30} 
      distance={15} 
      target-position={[3.3, 0, 3.9]} 
      onUpdate={(self)=> self.target.updateMatrixWorld()}/>
  )
}
function Screen(){
  const ref = useRef()
  useFrame((state, delta) => {
    const sin = Math.sin(state.clock.elapsedTime) + Math.cos(state.clock.elapsedTime * 3)
    ref.current.intensity = (0.2 +Math.abs(sin/10)) * 3
  })
  return(
    <spotLight 
      angle={.87} 
      ref={ref} 
      position={[-5.9,1.5,0.7]}
      color={'#86aceb'} 
      penumbra={1} 
      decay={2} 
      castShadow 
      power={1} 
      distance={4} 
      target-position={[-4.3,1.2,0.7]} 
      onUpdate={(self)=> self.target.updateMatrixWorld()}/>
  )
}
function Chandalier(){
  const ref = useRef()
  const [targPos, setTargPos] = useState([0,0,0])
  useFrame((state, delta) => {
    const sin = Math.sin(state.clock.elapsedTime) + Math.cos(state.clock.elapsedTime * 3)
    const rotateX = (Math.sin(state.clock.elapsedTime)) 
    const rotateZ = (Math.cos(state.clock.elapsedTime*1.2)) 
    ref.current.intensity = (.1 +Math.abs(sin/40)) * 2
    setTargPos([(rotateX), 0, (rotateZ)])
  })
  return(
    <spotLight 
      angle={1} 
      ref={ref} 
      position={[0, 6, 0]}
      color={'white'} 
      penumbra={.5} 
      decay={2} 
      intensity={1}
      castShadow 
      shadow-bias={-.001}
      power={1} 
      target-position={targPos}
      shadow-mapSize={[2048,2048]}
      onUpdate={(self)=> self.target.updateMatrixWorld()}/>
  )
}
export default function App() {
  const [project, setProject] = useState(false);
  const [controls, setControls] = useState(true);
  const [skills, setSkills] = useState(false);
  const [about, setAbout] = useState(false);
  const [start, setStart] = useState(false)
  function handleSpells(){
    if(spellBookVis === 'visible'){
      setSpellBookVis('hidden')
    }else{
      setSpellBookVis('visible')
    }
  }

  const cameraProject = () => {
    if(project === false){
      handleSpells()
      setControls(false)
      setProject(true)
      
      return console.log("Switched Camera Projects")
    }else{
      handleSpells()
      setProject(false)
      setControls(true)
      
      return console.log("Switched Camera Default")
    }
  }
  const cameraSkills= () => {
    if(skills === false){
      handleSpells()
      setControls(false)
      setSkills(true)
      return console.log("Switched Camera Projects")
    }else{
      handleSpells()
      setSkills(false)
      setControls(true)
      return console.log("Switched Camera Default")
    }
  }
  
  const cameraAbout= () => {
    if(about === false){
      handleSpells()
      setControls(false)
      setAbout(true)
      setStart(true)
      return console.log("Switched Camera About")
    }else{
      handleSpells()
      setAbout(false)
      setStart(false)
      setControls(true)
      return console.log("Switched Camera Default")
    }
  }
  const [hidden, setHidden] = useState(true)
  const [vis, setVis] = useState('hidden')
  const [vis2, setVis2] = useState('visible')
  const [spellBookVis, setSpellBookVis] = useState('visible')
  
  function handleClick(){
    setHidden(s => !s)
    setVis('visible')
    setVis2('hidden')
  }

  return (
    <>
     <Loader  />
     <div id='nameContainer'><h1 id='nameTitle'>Stephen O'Marrah</h1></div>
    <div id="buttonContainer" style={{visibility:vis2}}>
   
    {hidden ? <><button id="enterButton" onClick={handleClick}>Enter</button>
              </> : null}
    </div>
    
        <>
        
        <div id="canvasContainer" style={{visibility:vis}}>
      <Canvas shadows dpr={[1,2]}>
        <Chandalier/>
        {/* <TestArea/> */}
        <Suspense fallback={null}>
        <Lantern/>
        <Screen/>
        <directionalLight intensity={.01} position={[0,10,0]} color={'#c2c5cc'} shadow-bias={-.001} shadow-mapSize={[2048,2048]} castShadow/>
        <hemisphereLight intensity={0.125} color="blue" groundColor="white" />
        <ambientLight intensity={0.05} />
        <group>
        <Camera
          makeDefault
          name="Default"
          position={[7, 10, 7]}
          zoom={75}
          near={-150}
          far={300}
        />
      </group>
      
            <Room2 scale={.5} position={[0,-2.5,0]} start={start} cameraAbout={cameraAbout} cameraProject={cameraProject} cameraSkills={cameraSkills}/>
            <Room2 scale={.03} position={[1.5,.9,3.4]}/>
            <Room2 position={[-30,-70,-68]} scale={10}/>
          
          <AboutCamera makeDefault={about} zoom={285} position={[-1, 1.2, 5.4]} />
          <SkillsCamera makeDefault={skills} zoom={1200} near={-20} position={[4.5,6,4.5]} left={window.innerWidth/-2} right={window.innerWidth/2} top={window.innerHeight/2} bottom={window.innerHeight/-2}/>
          <ProjectCamera makeDefault={project} zoom={650} position={[-3.7,1.6,0.6]}/>
          <OrbitControls makeDefault enabled={controls}
              minAzimuthAngle={-Math.PI/12}
              maxAzimuthAngle={Math.PI/2}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 3}
              enableZoom={true}
              enablePan={false}
              zoomSpeed={1}
              minDistance={5}
              maxDistance={20}
              >
            </OrbitControls>
            </Suspense>
          {/* <gridHelper position={[0,-1,0]}args={[80,40]}/> */}
          
      </Canvas>
      </div>
      <div id='spellBookVis' style={{visibility:spellBookVis}}>
      <div id="container" >
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
          <img
            className="spellBook"
            src={magicBook}
            height="100"
            width="100"
            alt="SpellBook"
          />
      </div>
      </div>
      </>
       
      
      </>
  );
}
