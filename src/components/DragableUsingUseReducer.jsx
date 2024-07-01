import React, { useReducer } from "react";

const initialState = {
  left: 0,
  top: 0,
  isDragging: false,
  initialX: 0,
  initialY: 0,
};

function boxReducer(state, action) {
  switch (action.type) {
    case "START_DRAG":
      return {
        ...state,
        isDragging: true,
        initialX: action.payload.initialX,
        initialY: action.payload.initialY,
      };
    case "END_DRAG":
      return {
        ...state,
        isDragging: false,
      };
    case "DRAG":
      if (state.isDragging) {
        const left = action.payload.clientX - state.initialX;
        const top = action.payload.clientY - state.initialY;
        return {
          ...state,
          left,
          top,
        };
      }
      return state;
    default:
      return state;
  }
}

function DragableUsingUseReducer() {
  const [state, dispatch] = useReducer(boxReducer, initialState);

  const handleMouseDown = (e) => {
    dispatch({
      type: "START_DRAG",
      payload: {
        initialX: e.clientX - state.left,
        initialY: e.clientY - state.top,
      },
    });
  };

  const handleMouseUp = () => {
    dispatch({ type: "END_DRAG" });
  };

  const handleMouseMove = (e) => {
    dispatch({
      type: "DRAG",
      payload: {
        clientX: e.clientX,
        clientY: e.clientY,
      },
    });
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{
        left: state.left,
        top: state.top,
        backgroundColor: "black",
        color: "white",
        position: "absolute",
        cursor: "pointer",
        padding: "10px",
        border: "1px solid black",
      }}
    >
      Drag the task
    </div>
  );
}

export default DragableUsingUseReducer;
