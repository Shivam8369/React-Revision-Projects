import React, { useEffect, useState } from 'react'

const Fetching = () => {

    const url  = 'https://jsonplaceholder.typicode.com/users';
    const [data,setData] = useState([]); 

    const fetchData = async () => {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    };

    
    // one way
    // useEffect(()=>{

    //     fetch(url)
    //     .then( (response) => response.json() )
    //     .then((json) => setData(json));

    // },[])

    // another way
    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div style={{textAlign: 'center'}}>
        <h1>API-Data</h1>
        {data.map((item) => (
            <div style={{border:'2px solid green'}} key={item.id}>
                <p>ID: {item.id}</p>
                <p>Username: {item.username}</p>
                <p>Email: {item.email}</p>
            </div>
        ))}
    </div>
  );
}

export default Fetching