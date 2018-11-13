import React from "react";

function MiddleBodyItem(){
  let divStyle = {
    width: '100%',
    border: '1px solid gray',
    height: 140
  };

  let pictureDivStyle = {
    float: 'left',
  };

  let textDivStyle = {
    textAlign: 'left',
    margin: 10,
    float: 'right',
    width: 300
  };

  let pictureStyle = {
    width: 70,
    height: 70,
    position: 'relative',
    transform: 'translate(70%, 40%)'
  }
  return (
    <div style={divStyle}>
      <div style={pictureDivStyle}>
        <img style={pictureStyle} src="http://profilepicturesdp.com/wp-content/uploads/2018/07/empty-profile-picture-icon-5.png"/>
      </div>
      <div style={textDivStyle}>
        <h4>Lorem Ipsum</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elite. Nullam</p>
      </div>
    </div>
  
  );
}

export default MiddleBodyItem;