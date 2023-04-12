import { useState, useContext } from "react";
import "./Glass.css";
import { ReactComponent as GlassEmpty } from "../../../glass_empty.svg";
import { ReactComponent as GlassFull } from "../../../glass_full.svg";
import { GlassContext } from "../../Molecules/GlassesContainer";
const Glass = ({}) => {
  const [isGlassFull, setIsGlassFull] = useState(true);
  const context = useContext(GlassContext);

  const clickHandler = () => {
    if (context.water < 0) {
      context.setWater(0);
    } else if (context.water > context.numberOfGlasses * context.glassSize) {
      console.error("More water than max");
    }

    setIsGlassFull(!isGlassFull);
    if (isGlassFull) {
      context.setWater(context.water - context.glassSize);
    } else {
      context.setWater(context.water + context.glassSize);
    }
  };

  return (
    <div onClick={clickHandler}>
      {isGlassFull ? <GlassFull /> : <GlassEmpty />}
    </div>
  );
};

export default Glass;
