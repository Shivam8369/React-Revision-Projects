import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    return setCount(count + 1);
  };

//   const Decrement = () => {
//     if (count > 0) return setCount(count - 1);
//   };

  const containerStyle = {
    textAlign: "center",
    marginTop: "50px",
  };

  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
  };

  const countStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>

      <h1>Counter-APP</h1>
      <button style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }} onClick={Increment}>+</button>
      <p style={countStyle}>{count}</p>
      <button style={buttonStyle} onClick={()=>{ if(count>0) setCount(count - 1)}}>-</button>

    </div>
  );
};

export default Counter;
