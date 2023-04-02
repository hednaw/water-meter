import { useState } from "react";
import Glass from "../Atoms/Glass/Glass";
import "./GlassesContainer.css";
export const GlassesContainer = ({ numberOfGlasses }) => {
  const glassesNum = new Array(numberOfGlasses).fill(null).map((_, i) => i);
  const [water, setWater] = useState(numberOfGlasses * 200);

  const handleClick = (water) => {
    setWater(water - 200);
    console.log(`Water ` + water);
  };

  return (
    <div className="con">
      <h1>{water}</h1>
      {glassesNum.map((_, i) => (
        <Glass
          key={i}
          onClick={() => {
            water = water - 200;
          }}
        ></Glass>
      ))}
    </div>
  );
};
export default GlassesContainer;
