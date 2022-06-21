import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrthographicCamera, Html } from "@react-three/drei";
import * as THREE from "three";

export default function Camera() {
  const defaultCamera = useRef();
  const skillCamera = useRef();
  const projectCamera= useRef();
  const { get, set } = useThree(({get, set }) => ({ get, set }));
  useEffect(() => {
      if (get().div === "spellEffects") {
        console.log(get().camera.name);
        set({ camera: projectCamera.current });
        projectCamera.current.lookAt(-14 , 0, .5);
        projectCamera.current.updateProjectionMatrix();
        console.log("switching!");
    //   } else if (get().div.name === 1){
    //     set({ camera: skillCamera.current });
    //     skillCamera.current.lookAt(4,6,8);
    //     skillCamera.current.updateProjectionMatrix();
      }else{
        set({ camera: defaultCamera.current });
    
      }
  }, []);

  return (
    <>
     <OrthographicCamera
        name="DefaultCamera"
        ref={defaultCamera}
        position={[7,6,7]}
        zoom={100}
        near={-100}
        far={100}
        makeDefault
      />
      <OrthographicCamera
        name="SkillCamera"
        ref={skillCamera}
        position={[0, 2, 0]}
        zoom={100}
        near={-100}
        far={100}
        left={window.innerWidth / -2}
        right={window.innerWidth / 2}
        top={window.innerHeight / 2}
        bottom={window.innerHeight / -2}
      />
      <OrthographicCamera
        name="ProjectCamera"
        ref={projectCamera}
        position={[0, 2, 0]}
        zoom={100}
        near={-100}
        far={100}
        left={window.innerWidth / -2}
        right={window.innerWidth / 2}
        top={window.innerHeight / 2}
        bottom={window.innerHeight / -2}
      />
      <Html position={[0,5,0]}>
                <div name="spellEffects" className='spellEffects' onClick={()=>console.log('clicked project')}>HELLLOOOO</div>
      </Html>
    </>
  );
}