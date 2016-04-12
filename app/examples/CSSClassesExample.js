import React, { Component } from 'react';
import Modal from 'react-modal';

import './CSSClassesExample.css';

// This is the code to be shown in the example
export const sampleCode = `

  // With your styles
  .ModalClass {
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    background-color: papayawhip;
  }

  .OverlayClass {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rebeccapurple;
  }

  class CSSClassesExample extends React.Component {
    constructor () {
      super();
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal () { this.setState({open: true}); }

    closeModal () { this.setState({open: false}); }

    render () {
      return (
        <div>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal
            className="ModalClass"
            overlayClassName="OverlayClass"
            isOpen={this.state.open}
            onRequestClose={this.closeModal}
          >
            <h1>Styled Using Classes Modal</h1>
            <button onClick={this.closeModal}>Close</button>
            <input />
            <input />
          </Modal>
        </div>
      );
    }
  }
`;

export default class CSSClassesExample extends Component {
  constructor (props) {
    super(props);

    this.state = {
      open: false,
      codeShowing: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal () {
    this.setState({
      open: true
    });
  }

  closeModal () {
    this.setState({
      open: false
    });
  }

  render () {
    return (
      <div className="CSSClassesExample">
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          className="ModalClass"
          overlayClassName="OverlayClass"
          isOpen={this.state.open}
          onRequestClose={this.closeModal}
        >
          <h1>Styled Using Classes Modal</h1>
          <button onClick={this.closeModal}>Close</button>
          <input />
          <input />
        </Modal>
      </div>
    );
  }
}
