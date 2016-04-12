import React, { Component } from 'react';
import Modal from 'react-modal';

// This is the code to be shown in the example
export const sampleCode = `
  class BasicExample extends React.Component {
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
          <Modal isOpen={this.state.open}>
            <h1>Basic Modal</h1>
            <button onClick={this.closeModal}>Close</button>
            <input />
            <input />
          </Modal>
        </div>
      );
    }
  }
`;

export default class BasicExample extends Component {
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
      <div className="BasicExample">
        <button onClick={this.openModal}>Open Modal</button>
        <Modal isOpen={this.state.open}>
          <h1>Basic Modal</h1>
          <button onClick={this.closeModal}>Close</button>
          <input />
          <input />
        </Modal>
      </div>
    );
  }
}
