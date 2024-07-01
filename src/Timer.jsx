import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Interval to update seconds state every second
        const interval = setInterval(() => {
            // Update seconds state by incrementing current value
            setSeconds(seconds => seconds + 1);
        }, 1000);

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Convert total seconds to hours, minutes, and seconds
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Timer</h1>
            <div style={{ fontSize: '24px' }}>
                {/* Display hours, minutes, and seconds */}
                {hours.toString().padStart(2, '0')} : 
                {minutes.toString().padStart(2, '0')} :
                {remainingSeconds.toString().padStart(2, '0')}
            </div>
        </div>
    );
}

export default Timer;
