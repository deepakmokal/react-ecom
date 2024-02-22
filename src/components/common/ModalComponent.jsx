// ModalComponent.js
import React from "react";
import Modal from "react-modal";
import plusIcon from '../../assets/images/plus.svg'

const ModalComponent = ({ isOpen, onRequestClose, children }) => {
    const customStyles = {
        content: {
          height: 'auto', // Set height to auto to adjust based on content
          width: '80%', // Adjust width as needed
          maxWidth: '600px', // Set maximum width if desired
          margin: 'auto', // Center the modal horizontally
        },
        closeButton: {
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#000',
            marginBottom: '30px',
            height: '30px',
            width: '30px',
            transform: 'rotate(45deg)'
        }
      };
      

      
  return (
    <Modal isOpen={isOpen} 
    style={customStyles}
    onRequestClose={onRequestClose}>
        <button onClick={onRequestClose} >
            <img src={plusIcon} alt="close" style={customStyles.closeButton} />
        </button>
      {children}
    </Modal>
  );
};

export default ModalComponent;
