import React, { useState } from 'react'
import Modal from './Modal'

const ModalTest = () => {

  const [showModal, setModal] = useState(false);

  const handleToggleModalPopup = ()=>{
    setModal(!showModal);
  }

  function onClose(){
    setModal(false);
  }
  return (
    <div style={{textAlign:'center'}}>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModal && <Modal
        id = {"1"}
        Header = {<h1> custom Header </h1>}
        Body = {<p>Custom Body</p>}
        Footer = {<h3>Custom footer</h3>}
        onClose ={onClose}
      />}
    </div>
  )
}

export default ModalTest