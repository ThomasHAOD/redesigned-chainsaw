import React from "react";
import Modal from "react-bootstrap/Modal";

const CustomModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Sign Up!</Modal.Title>
      </Modal.Header>
      <Modal.Body>AWS UI Goes here!</Modal.Body>
    </Modal>
  );
};

export default CustomModal;
