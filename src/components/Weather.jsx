import React, { useEffect, useState } from 'react'

const Weather = () => {

    const [data , setData] = useState(null);

    const weatherData = () => {

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=53cbf6b7bd02a2df9591c91dca9a2b85
                `)
                .then((response)=>response.json())
                .then((data) => setData(data));
            })
        }
    }

    useEffect(()=>{
        weatherData();     
    },[])
    // we can add more than one useEffect
    useEffect(() => {
        if (data) {
          console.log(data);
        }
    }, [data]);

  return (
    <div style={{textAlign:'center', paddingTop: '50px'}}> <h1>Weather Detail</h1>
        {
            
            data ? 
            (
                <div>
                <h2>Current weather</h2>
                <p>Temperature:{data.main.temp}</p>
                <p>Conditions:{data.weather[0].description}</p>
                <p>City:{data.name}</p>
                </div>
            )
            :
            (
                <p>Loading...</p>
            )
        }

    </div>
  )
}

export default Weather