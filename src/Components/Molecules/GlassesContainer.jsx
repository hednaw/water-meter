import { useState, createContext } from "react";
import Glass from "../Atoms/Glass/Glass";
import "./GlassesContainer.css";
import { useEffect } from "react";

export const GlassContext = createContext(null);

export const GlassesContainer = ({ numberOfGlasses, glassSizeProp }) => {
  const glassesNum = new Array(numberOfGlasses).fill(null).map((_, i) => i);
  const glassSize = glassSizeProp;
  const [water, setWater] = useState(numberOfGlasses * glassSize);

 
  return (
    <GlassContext.Provider value={{ water, setWater, glassSize }}>
      <h1 className="waterLabel">{water} ml.</h1>
      <div className="con">
        <div className="glasses">
          {glassesNum.map((_, i) => (
            <Glass key={i} className="glass" k={i}></Glass>
          ))}
        </div>
      </div>
    </GlassContext.Provider>
  );
};
export default GlassesContainer;
