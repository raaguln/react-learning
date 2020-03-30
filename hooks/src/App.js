import React from "react";
import Count from "./components/Count";
import Notes from "./components/Notes";
import UseEffect from "./components/UseEffect";
import UseEffectCleanup from "./components/UseEffectCleanup";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Count count={0}/> */}
      {/* <Notes/> */}
      {/* <UseEffect count={0}/> */}
      <UseEffectCleanup />
    </div>
  );
}

export default App;
