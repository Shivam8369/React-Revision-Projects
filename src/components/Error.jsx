import React from 'react'
import { useRouteError } from 'react-router-dom'
import { NavLink} from "react-router-dom";

const Error = () => {

  const navList = {
    color: "white",
    backgroundColor: "Blue",
    padding: "10px",
    fontFamily: "Arial",
    borderRadius: "7px"
  };
  const showError = useRouteError(); // it catches all the routing error 
  console.log(showError);
  return (
    <div style={{textAlign: 'center'}}>
      <h2>Oops something went wrong !!!</h2>
      <h2>{showError.status} : {showError.statusText} </h2>
      <p> {showError.data} </p>
      {/* <a href="/">Home</a> =>not a good practice */}
      <NavLink style={navList} to='/'>Home</NavLink>
    </div>
  )
}

export default Error