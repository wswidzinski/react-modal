import React, { Component } from 'react';
import Modal from 'react-modal';

// This is the code to be shown in the example
export const sampleCode = `
  class InlineStylesExample extends React.Component {
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
            style={{
              overlay: {
                backgroundColor: 'papayawhip'
              },
              content: {
                color: 'lightsteelblue'
              }
            }}
            isOpen={this.state.open}
            onRequestClose={this.closeModal}
          >
            <h1>Styled Using Inline Styles Modal</h1>
            <button onClick={this.closeModal}>Close</button>
            <input />
            <input />
          </Modal>
        </div>
      );
    }
  }
`;

export default class InlineStylesExample extends Component {
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
      <div className="InlineStylesExample">
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          style={{
            overlay: {
              backgroundColor: 'papayawhip'
            },
            content: {
              color: 'lightsteelblue'
            }
          }}
          isOpen={this.state.open}
          onRequestClose={this.closeModal}
        >
          <h1>Styled Using Inline Styles Modal</h1>
          <button onClick={this.closeModal}>Close</button>
          <input />
          <input />
        </Modal>
      </div>
    );
  }
}
