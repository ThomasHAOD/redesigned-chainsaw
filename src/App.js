import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="primary" onClick={showModal}>
          Show Modal
        </Button>
        <Modal show={show} onHide={hideModal}></Modal>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
