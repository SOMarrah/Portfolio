import { useEffect, useState } from "react";
import Text from "./Text";

export default function AboutTypeWriter(props){
    const words = ["Hey there, my name is Stephen OMarrah. Thank you for checking out my portfolio. While I have you here for a moment, let me tell you a little about myself. I am a husband. I am creative. I love games. I love solving problems. Coding is my passion. Have fun exploring my portfolio...Before I forget, to go back click the picutres."]
    const [index, setIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0)
    const [reverse, setReverse] = useState(false)
    const [blink, setBlink] = useState(true)
   
    useEffect(() => {
      if(props.start === true) {
        const timeout2 = setTimeout(() => {
        setBlink((prev) => !prev);
        }, 275);
        return () => clearTimeout(timeout2);
      }
      // else{
      //   return null
      // }
      }, [blink]);

      useEffect(() => {
        if(props.start === true){ 
          if (
          index === words.length - 1 &&
          subIndex === words[index].length
          ) {
            return;
          }
        if (
          subIndex === words[index].length + 1 &&
          index !== words.length - 1 &&
          !reverse
          ) {
            setReverse(true);
            return;
           }
         
        if (subIndex === 0 && reverse) {
          setReverse(false);
          setIndex((prev) => prev + 1);
          return;
           }
         const timeout = setTimeout(() => {
         setSubIndex((prev) => prev + (reverse ? -1 : 1));
         }, 80);
         
         return () => clearTimeout(timeout);
         }
        
      }, [subIndex, index, reverse, props.start])

    return(
        <Text {...props}  >
            <div id="typewriter">
            <h1 >
            {`${words[index].substring(0, subIndex)}${blink ? "" : ""}`}
            </h1>
            </div>
        </Text>
    )
}