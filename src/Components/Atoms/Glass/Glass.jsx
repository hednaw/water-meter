import React from "react";
import "./Glass.css";
import { ReactComponent as GlassEmpty } from "../../../glass_empty.svg";
import { ReactComponent as GlassFull } from "../../../glass_full.svg";
const Glass = ({handler}) => {
  const [isGlassFull, setIsGlassFull] = React.useState(true);
  

  const handleClick = () => {
    setIsGlassFull(!isGlassFull);
    console.log("test", isGlassFull);
    
  };

  return (
    <div onClick={()=>{handleClick();handler()}}>
      {isGlassFull ? <GlassFull /> : <GlassEmpty />}
    </div>
  );
};

export default Glass;
