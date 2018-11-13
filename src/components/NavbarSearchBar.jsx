import React from "react";

function NavbarSearchBar(){
  
  let styles = {
    border: '2px solid lightblue',
    padding: 10,
    borderRadius: 10,
    marginLeft: 20,
  };

  let divStyle = {
    display: 'inline-block',
    float: 'right'
  }


  return (
    <div style={divStyle}>
      <input placeholder="Search" style={styles}/>
      <a style={styles} href="">Tweet</a> 
    </div>
  );
}

export default NavbarSearchBar;