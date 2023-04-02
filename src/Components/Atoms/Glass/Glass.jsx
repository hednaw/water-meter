import React from "react";
import "./Glass.css";
import { ReactComponent as GlassEmpty } from "../../../glass_empty.svg";
import { ReactComponent as GlassFull } from "../../../glass_full.svg";
const Glass = () => {
  const [isGlassFull, setIsGlassFull] = React.useState(true);

  const handleClick = (e) => {
    setIsGlassFull(!isGlassFull);
    console.log("test", isGlassFull);
  };

  return (
    <div onClick={handleClick}>
      {isGlassFull ? <GlassFull /> : <GlassEmpty />}
    </div>
  );
};

export default Glass;
