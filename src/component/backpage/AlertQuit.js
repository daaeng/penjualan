import React, { Component } from "react";
import ReactModal from "react-modal";
import {ImExit } from 'react-icons/im'

ReactModal.setAppElement();

class AlertQuit extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>

        <ImExit onClick={this.handleOpenModal} className="cursor-pointer"/>

        <ReactModal 
            className={``}
           isOpen={this.state.showModal}
           contentLabel="Anda Yakin Ingin Keluar ?"
           onRequestClose={this.handleCloseModal}
        >
          <p>Anda Yakin Ingin Keluar ?</p>
          <button onClick={this.handleCloseModal} className="p-1 bg-marron font-bold text-white rounded-lg mr-3">Close Modal</button>
          <button onClick={this.handleCloseModal} className="p-1 bg-green-500 font-bold text-white rounded-lg">Exit App</button>

        </ReactModal>
      </div>
    );
  }
}
// const props = {};

// render(document.getElementById())

export default AlertQuit