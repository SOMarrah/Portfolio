import { useHelper, Box, OrthographicCamera } from "@react-three/drei";
import { CameraHelper, DirectionalLightHelper, DirectionalLight, PointLight, PointLightHelper, SpotLight, SpotLightHelper} from 'three';
import { folder, useControls} from 'leva'
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function TestArea() {
    const { scale, color, position, rotation, wireframe } = useControls("Box", {
      transform: folder({ 
        scale: {
          value: 1,
          min: 0.4,
          max: 20,
          step: 0.2,
        },
        position:{
          value:[0,0,0],
          x:{step: 0.1,
          },
          y:{step: 0.1,
          },
          z:{step: 0.1,
          },
        },
        rotation:{
          value:[0,0,0],
          x:{step: 0.1,
          },
          y:{step: 0.1,
          },
          z:{step: 0.1,
          },
        }
      }),
      material: folder({
        color: "#333",
        wireframe: false,
      })
    });
    const camera = useRef()
    //a helper method to see the camera and its visibile bounds
    useHelper(camera, CameraHelper, 1, 'hotpink')
    const { location, rotate, zoom, top, bottom, left, right, near, far } = useControls("OrthographicCamera",{
      transform: folder({
        location:{
          value:[0,0,0],
          x:{step: 0.1,
          },
          y:{step: 0.1,
          },
          z:{step: 0.1,
          },
        },
        rotate:{
          value:[0,0,0],
          x:{step: 0.1,
          },
          y:{step: 0.1,
          },
          z:{step: 0.1,
          },
        },
        zoom: 40,
        top: 200,
        bottom: -200,
        left: 200,
        right: -200,
        near: 1,
        far: 2000,
      })
    })
    const directionalLightRef = useRef()
    useHelper(directionalLightRef, PointLightHelper, 1, 'red');
    const { dlightintensity, dlightposition, dlightcolor, dlightsize, visible, shadowMapheight, shadowMapwidth ,plightrotation} = useControls("PointLight",{
      transform: folder({
        dlightintensity:{
          value:1,
          min: 0,
          max: 10,
          step: .2,
        },
        dlightposition: { value:[0,8,0],
        x:{step: 0.1,
        },
        y:{step: 0.1,
        },
        z:{step: 0.1,
        }},
        dlightsize:1,
        dlightcolor: 'red',
        visible: true,
        shadowMapheight: 10,
        shadowMapwidth: 10,
      })
    })
    const spotLightRef = useRef();
    useHelper(spotLightRef, SpotLightHelper, 'red' );
    const { angle, slightintensity, slightposition,targetPos, slightcolor, penumbra, decay, cast, power, distance} = useControls("SpotLight",{
      transform: folder({
        angle:0,
        slightintensity:{
          value:1,
          min: 0,
          max: 10,
          step: .2,
        },
        slightposition:{ value:[0,0,0],
          x:{step: 0.1,
          },
          y:{step: 0.1,
          },
          z:{step: 0.1,
          }},
        targetPos:{ value:[0,0,0],
        x:{step: 0.1},
        y:{step:0.1},
        z:{step:0.1}},
        slightcolor: 'blue',
        penumbra: {value:0, min: 0, max: 1, step:.1},
        decay:{value:1, min: 1, max: 2, step:.1},
        cast: false,
        power: {value:1, min:0, step:1},
        distance:{value:0, min:0, step:1},
      })
    })
    return(
      <>
      {/* <Box scale={ scale } position={position} rotation={rotation}>
        <meshStandardMaterial color={color} wireframe={wireframe}/>
      </Box> */}
      <spotLight ref={spotLightRef} target-position={targetPos} angle={angle}distance={distance}position={slightposition} power={power} color={slightcolor} onUpdate={(self)=> self.target.updateMatrixWorld()} decay={decay} intensity={slightintensity} castShadow={cast} penumbra={penumbra}/>
      {/* <pointLight ref={directionalLightRef} position={dlightposition} color={dlightcolor} intensity={dlightintensity} size={dlightsize}  visible={visible}
    shadow-mapSize-width={shadowMapwidth}
    shadow-mapSize-height={shadowMapheight} rotation={plightrotation}/> */}
      {/* <OrthographicCamera makeDefault={false} position={location} ref={camera} rotation={rotate} zoom={zoom}
          top={top}
          bottom={bottom}
          left={left}
          right={right}
          near={near}
          far={far}
          /> */}
      </>
    )
  }