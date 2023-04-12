import { useState, createContext } from "react";
import Glass from "../Atoms/Glass/Glass";
import "./GlassesContainer.css";

export const GlassContext = createContext(null);

export const GlassesContainer = ({ numberOfGlasses }) => {
  const glassesNum = new Array(numberOfGlasses).fill(null).map((_, i) => i);
  const glassSize = 200;
  const [water, setWater] = useState(numberOfGlasses * glassSize);
  const [flag, SetFlag] = useState(true);
  const handleClick = () => {
    if (flag) {
      setWater(water - glassSize);
      console.log(`Water ` + water);
      SetFlag(!flag);
    } else {
      setWater(water + glassSize);
      SetFlag(!flag);
    }
  };

  return (
    <GlassContext.Provider value={{ water, setWater }}>
      <div className="con">
        <h1>{water}</h1>
        {glassesNum.map((_, i) => (
          <Glass key={i} handler={handleClick}></Glass>
        ))}
      </div>
    </GlassContext.Provider>
  );
};
export default GlassesContainer;
