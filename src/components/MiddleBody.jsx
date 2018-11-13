import React from "react";
import MiddleBodyItem from "./MiddleBodyItem";

function MiddleBody(){
  let divStyle = {
    width: '100%',
    border: '2px solid gray',
    minHeight: 625,
    borderTop: 'none',
  };
  return (
    <div style={divStyle}>
    <MiddleBodyItem/>
    <MiddleBodyItem/>
    <MiddleBodyItem/>
    <MiddleBodyItem/>
    <MiddleBodyItem/>
    </div>
  
  );
}

export default MiddleBody;