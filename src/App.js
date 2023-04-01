import glass_empty from './glass_empty.svg';
import glass_full from "./glass_full.svg"
import './App.css';
import Glass from './Components/Atoms/Glass/Glass';
import { useState } from 'react';

function App() {
  const [glassType, setGlassType] = useState(glass_full)
  return (
    <div className="App">
      <Glass glassType={glassType}></Glass>
    </div>
  );
}

export default App;
