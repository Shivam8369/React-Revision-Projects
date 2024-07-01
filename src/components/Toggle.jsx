import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div style={{   textAlign: "center",   marginTop: "50px", }} >

      <h1>Toggle</h1>
      <button style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }} onClick={() => { setToggle(!toggle)}} > 
        {toggle ? "ON" : "OFF"} 
      </button>

    </div>
  );
};

export default Toggle;
