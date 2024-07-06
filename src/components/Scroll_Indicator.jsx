import React, { useEffect, useState } from "react";

const Scroll_Indicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
    //   console.log(result);
      if (result && result.products.length > 0) {
        setData(result.products);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScroll(){
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    // console.log(scrollPercent);
    setScrollPercentage(scrollPercent);
  
  }

  useEffect(()=>{
    console.log("i AM INSIDE THE SCROLL" );
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  },[])

  const style = {
    topContainer: {
      position: 'fixed',
      top: 0,
      zIndex: 1,
      width: '100%',
      textAlign: 'center',
      backgroundColor: 'rgb(47 164 100)',
      color: '#fff',
    },
    scrollProgressTrackingContainer: {
      width: '100%',
      height: '10px',
      background: '#aaf900',
    },
    currentProgressBar: {
      height: '10px',
      background: '#8b02b5',
      width: '0%',
    },
    dataContainer: {
      textAlign: 'center',
      marginTop: '100px',
    },
  };


  if (loading) return <p>Loading data</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div style={style.topContainer} className="top-Container">
        <h1>Custom Scroll-Bar</h1>
        <div  style={style.scrollProgressTrackingContainer} className="scroll-progress-tracking-container">
          <div
            className="scroll-progress-bar"
            style={{ ...style.currentProgressBar, width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div style={style.dataContainer} className="data_container">
        {data && data.length > 0 ? (
          data.map((item, index) => <p key={index}>{item.title}</p>)
        ) : (
          <p>No Data</p>
        )}
      </div>
    </div>
  );
};

export default Scroll_Indicator;
