import React, { useState } from "react";
import data from "../Utilities/AccordianData";
import "../CSS/Accordian.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingle(id) {
    // we have to close the answer div
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  }

  const handleMultiple = (index) => {
    // includes return either 1 or 0
    if (multiple.includes(index)) {
      const newMultiple = multiple.filter((item) => item !== index);
      setMultiple(newMultiple);
    } else {
      setMultiple([...multiple, index]);
    }
  };

  return (
    <div className="acc-wrapper">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        {enableMultiSelection
          ? "Disable Multi-Selection"
          : "Enable Multi-Selection"}
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((DataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiple(DataItem.id)
                    : () => handleSingle(DataItem.id)
                }
              >
                <h2>{DataItem.question}</h2>
                <span>+</span>
              </div>

              {enableMultiSelection ? (
                multiple.indexOf(DataItem.id) !== -1 && (
                  <div className="acc-content">{DataItem.answer}</div>
                )
              ) : selected === DataItem.id ? (
                <div className="acc-content">{DataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> Data Not Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
