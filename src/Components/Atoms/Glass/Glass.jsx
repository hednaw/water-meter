import { useState, useContext } from "react";
import "./Glass.css";
import { ReactComponent as GlassEmpty } from "../../../glass_empty.svg";
import { ReactComponent as GlassFull } from "../../../glass_full.svg";
import { GlassContext } from "../../Molecules/GlassesContainer";
const Glass = ({ handler }) => {
  const [isGlassFull, setIsGlassFull] = useState(true);
  const context = useContext(GlassContext);
  console.log(context);

  const clickHandler = () => {
    setIsGlassFull(!isGlassFull);
    if (isGlassFull) {
      context.setWater(context.water - 200);
    } else {
      context.setWater(context.water + 200);
    }
  };

  return (
    <div
      onClick={() => {
        handler();
        clickHandler();
      }}
    >
      {isGlassFull ? <GlassFull /> : <GlassEmpty />}
    </div>
  );
};

export default Glass;
