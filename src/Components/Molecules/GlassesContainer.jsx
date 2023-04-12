import { useState, createContext } from "react";
import Glass from "../Atoms/Glass/Glass";
import "./GlassesContainer.css";

export const GlassContext = createContext(null);

export const GlassesContainer = ({ numberOfGlasses }) => {
  const glassesNum = new Array(numberOfGlasses).fill(null).map((_, i) => i);
  const glassSize = 200;
  const [water, setWater] = useState(numberOfGlasses * glassSize);

  return (
    <GlassContext.Provider value={{ water, setWater, glassSize }}>
      <div className="con">
        <h1>{water}</h1>
        {glassesNum.map((_, i) => (
          <Glass key={i}></Glass>
        ))}
      </div>
    </GlassContext.Provider>
  );
};
export default GlassesContainer;
