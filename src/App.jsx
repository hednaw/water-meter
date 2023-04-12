import "./App.css";
import GlassesContainer from "./Components/Molecules/GlassesContainer";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <GlassesContainer
        numberOfGlasses={10}
        glassSizeProp={200}
      ></GlassesContainer>
    </div>
  );
}

export default App;
