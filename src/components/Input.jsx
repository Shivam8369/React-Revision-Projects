import React, { useState } from 'react';

const Input = () => {
    const [input, setInput] = useState("");

    // Separate function to handle input change
    const handleInputChange = (e) => {
        setInput(e.target.value);
        console.log(e);
    };

    function handleInputChange2 (e) {
        setInput(e.target.value);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <input 
                type="text" 
                value={input} 
                placeholder='Enter Here...' 
                onChange={handleInputChange2} 
                style={{ padding: '10px', fontSize: '16px', width: '300px', margin: '10px' }}
            />
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Your Input: {input}</p>
        </div>
    );
}

export default Input;
