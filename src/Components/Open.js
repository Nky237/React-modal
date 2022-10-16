import React, { useState } from 'react'
import Modal from './Modal'
import './Open.css'

const Open = () => {
  const[modalOpen, setModalOpen] = useState(false)
    return (
    <div className='open'>
        <h1>CLICK TO OPEN MODAL</h1>
        <button className='ModalOpenBtn' onClick = {()=>{
            setModalOpen(true)
        }}>
            Open
        </button>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  )
}

export default Open