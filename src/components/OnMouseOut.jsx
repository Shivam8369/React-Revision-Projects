import React, { useState, useRef, useEffect } from 'react';

const OnMouseOut = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);


  const handleClickOutside = (event) => {
    if (contentRef.current) {

      setIsOpen(false);
    }
    console.log(contentRef.current);

  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{textAlign:'center'}}>
      <button onClick={toggleContent}>
        {isOpen ? 'Hide Content' : 'Show Content'}
      </button>
      {isOpen && (
        <div ref={contentRef} className="content">
          <p>This is the content that will be toggled on and off.</p>
        </div>
      )}
    </div>
  );
};

export default OnMouseOut;
