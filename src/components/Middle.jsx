import React from "react";
import MiddleBody from "./MiddleBody";

function Middle(){
  let headerStyle = {
    border: '2px solid #a6d7f1',
    width: '100%',
    height: 90,
    backgroundColor: '#a6d7f1',
  }

  let headerBoxStyle = {
    width: 45,
    height: 45,
    backgroundColor: '#740403',
    position: 'relative',
    top: '25%',
    left: '10%',
    display: 'inline-block'
  }

  let statusBoxStyle = {
    width: '65%',
    height: 45,
    border: '1px solid #76bee4',
    backgroundColor: 'white',
    fontSize: '16px',
    paddingLeft: 10,
    paddingRight: 10,
    color: '#76bee4',
    display: 'inline-block',
    position: 'relative',
    top: '6%',
    left: '15%'
  }

  return (
    <div>
      <div style={headerStyle}>
        <div style={headerBoxStyle}>
        </div>
        <input style={statusBoxStyle} type="text" placeholder="What's happening?">
        </input>
      </div>
      <MiddleBody/>
    </div>
  );
}

export default Middle;