import React, { Component } from 'react';
import Modal from 'react-modal';

// This is the code to be shown in the example
export const sampleCode = `

  Modal.setAppElement('#main');

  class AppElementExample extends React.Component {
    constructor () {
      super();
      this.state = {open: false};
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal () { this.setState({open: true}); }

    closeModal () { this.setState({open: false}); }

    render () {
      return (
        <div>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal isOpen={this.state.open} onRequestClose={this.closeModal}>
            <h1>Close Me With Escape Modal</h1>
            <button onClick={this.closeModal}>Close</button>
            <input />
            <input />
          </Modal>
        </div>
      );
    }
  }
`;

Modal.setAppElement('#main');

export default class AppElementExample extends Component {
  constructor (props) {
    super(props);

    this.state = {
      open: false
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
      <div className="AppElementExample">
        <button onClick={this.openModal}>Open Modal</button>
        <Modal isOpen={this.state.open} onRequestClose={this.closeModal}>
          <h1>AppElementExample Modal</h1>
          <p>You'll notice that the aria-hidden attribute is on #main now rather
             than on the body.
          </p>
          <button onClick={this.closeModal}>Close</button>
          <input />
          <input />
        </Modal>
      </div>
    );
  }
}
