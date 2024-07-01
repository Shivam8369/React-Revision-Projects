import React, { useState } from 'react';

const FileAccepter = () => {
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    console.log(e);
    const file = e.target.files[0];
    setImage(file);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      padding: '20px',
    },
    header: {
      color: '#333',
      marginBottom: '20px',
    },
    input: {
      marginBottom: '20px',
    
    },
    image: {
      maxWidth: '100%',
      maxHeight: '400px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Image File Accepter</h1>
      <input
        type='file'
        accept='image/*' // it accept all type of image format 
        onChange={handleImage}
        style={styles.input}
      />
      {image && <img src={URL.createObjectURL(image)} alt='Uploaded' style={styles.image} />}
    </div>
  );
};

export default FileAccepter;


// audio/* meaning "any audio file".
// video/* meaning "any video file".
//accept="image/png, image/jpeg" />
