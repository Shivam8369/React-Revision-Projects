import React, { useState } from "react";

const Dragable = () => {
  const [top, setTop] = useState(60);
  const [left, setLeft] = useState(0);
  const [isDragable, setDragable] = useState(false);
  const [InitialX, setInitialX] = useState(0);
  const [InitialY, setInitialY] = useState(0);

  const handleMouseDown = (e) => {
    setDragable(true);
    setInitialX(e.clientX - left);
    setInitialY(e.clientY - top);
  };

  const handleMouseUp = () => {
    setDragable(false);
  };

  const handleMouseMove = (e) => {
    if (isDragable) {
      const newLeft = e.clientX - InitialX;
      const newTop = e.clientY - InitialY;
      setLeft(newLeft);
      setTop(newTop);
    }
  };

  const container = {
    left: left,
    top: top,
    backgroundColor: "black",
    color: "white",
    position: "absolute",
    cursor: "pointer",
    padding: "10px",
    border: "1px solid black",
  };
  return (
    <div>
      <h1>Dragable Component</h1>

      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={container}
      >
        Drag-The-Component
      </div>
    </div>
  );
};

export default Dragable;


