import React, { Component } from 'react';
import Modal from 'react-modal';

// This is the code to be shown in the example
export const sampleCode = `

  Modal.defaultStyles.overlay.backgroundColor = 'cornsilk';

  class GlobalStylesExample extends React.Component {
    constructor () {
      super();
      this.openModalOne = this.openModalOne.bind(this);
      this.closeModalOne = this.closeModalOne.bind(this);
      this.openModalTwo = this.openModalTwo.bind(this);
      this.closeModalTwo = this.closeModalTwo.bind(this);
    }

    openModalOne () { this.setState({open: true}); }
    openModalTwo () { this.setState({open: true}); }

    closeModalOne () { this.setState({open: false}); }
    closeModalTwo () { this.setState({open: false}); }

    render () {
      return (
        <div>
          <button onClick={this.openModalOne}>Open Modal One</button>
          <button onClick={this.openModalTwo}>Open Modal Two</button>
          <Modal
            isOpen={this.state.openOne}
            onRequestClose={this.closeModalOne}
          >
            <h1>Styled Global Overrides Modal One</h1>
            <button onClick={this.closeModalOne}>Close</button>
            <input />
            <input />
          </Modal>
          <Modal
            isOpen={this.state.openTwo}
            onRequestClose={this.closeModalTwo}
          >
            <h1>Styled Global Overrides Modal Two</h1>
            <button onClick={this.closeModalTwo}>Close</button>
            <input />
            <input />
          </Modal>
        </div>
      );
    }
  }
`;

export default class GlobalStylesExample extends Component {
  constructor (props) {
    super(props);

    this.state = {
      openOne: false,
      openTwo: false
    };

    this.openModalOne = this.openModalOne.bind(this);
    this.closeModalOne = this.closeModalOne.bind(this);
    this.openModalTwo = this.openModalTwo.bind(this);
    this.closeModalTwo = this.closeModalTwo.bind(this);

  }

  openModalOne () {
    Modal.defaultStyles.overlay.backgroundColor = 'cornsilk';
    this.setState({
      openOne: true
    });
  }

  closeModalOne () {
    Modal.defaultStyles.overlay.backgroundColor = 'rgba(255, 255, 255, 0.75)';
    this.setState({
      openOne: false
    });
  }

  openModalTwo () {
    Modal.defaultStyles.overlay.backgroundColor = 'cornsilk';
    this.setState({
      openTwo: true
    });
  }

  closeModalTwo () {
    Modal.defaultStyles.overlay.backgroundColor = 'rgba(255, 255, 255, 0.75)';
    this.setState({
      openTwo: false
    });
  }

  render () {
    return (
      <div className="GlobalStylesExample">
        <button onClick={this.openModalOne}>Open Modal One</button>
        <button onClick={this.openModalTwo}>Open Modal Two</button>
        <Modal
          isOpen={this.state.openOne}
          onRequestClose={this.closeModalOne}
        >
          <h1>Styled Global Overrides Modal One</h1>
          <button onClick={this.closeModalOne}>Close</button>
          <input />
          <input />
        </Modal>
        <Modal
          isOpen={this.state.openTwo}
          onRequestClose={this.closeModalTwo}
        >
          <h1>Styled Global Overrides Modal Two</h1>
          <button onClick={this.closeModalTwo}>Close</button>
          <input />
          <input />
        </Modal>
      </div>
    );
  }
}
