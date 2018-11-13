import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import Navbar from "./Navbar";
import Body from "./Body";

function App(){
  let mainBodyStyle = {
    width: 1140
  }

  return (
    <div style={mainBodyStyle}>
      <Navbar/>
      <Body/>
    </div>
  );
}

export default App;