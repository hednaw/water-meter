import { useState } from "react";
import Glass from "../Atoms/Glass/Glass";
import "./GlassesContainer.css";
export const GlassesContainer = ({ numberOfGlasses }) => {
  const glassesNum = new Array(numberOfGlasses).fill(null).map((_, i) => i);
  const glassSize = 200
  const [water, setWater] = useState(numberOfGlasses * glassSize);

  const handleClick = () => {
    setWater(water - glassSize);
    console.log(`Water ` + water);
  };

  return (
    <div className="con">
      <h1>{water}</h1>
      {glassesNum.map((_, i) => (
        <Glass
          key={i}
          handler={handleClick}
        ></Glass>
      ))}
    </div>
  );
};
export default GlassesContainer;
