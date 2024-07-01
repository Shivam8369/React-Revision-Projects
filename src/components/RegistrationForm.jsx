import React, { useRef, useState } from 'react';

const RegistrationForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setSubmittedData({ name, email, password });

    // Clear input fields after submission
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1em', border: '1px solid #ccc', borderRadius: '10px' }}>
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '.5em' }}>Name:</label>
          <input type="text" id="name" ref={nameRef} style={{ width: '100%', padding: '.5em', boxSizing: 'border-box' }} required />
        </div>

        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '.5em' }}>Email:</label>
          <input type="email" id="email" ref={emailRef} style={{ width: '100%', padding: '.5em', boxSizing: 'border-box' }} required />
        </div>

        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '.5em' }}>Password:</label>
          <input type="password" id="password" ref={passwordRef} style={{ width: '100%', padding: '.5em', boxSizing: 'border-box' }} required />
        </div>

        <button type="submit" style={{ padding: '.5em 1em', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Register
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '2em', padding: '1em', border: '1px solid #ccc', borderRadius: '10px' }}>
          <h2>Submitted Data</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
