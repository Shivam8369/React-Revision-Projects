import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const showError = useRouteError(); // it catches all the routing error 
  console.log(showError);
  return (
    <div style={{textAlign: 'center'}}>
      <h2>Oops something went wrong !!!</h2>
      <h2>{showError.status} : {showError.statusText} </h2>
      <p> {showError.data} </p>
    </div>
  )
}

export default Error