import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Modal from 'react-modal';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/jsx/jsx';

export default class ExampleContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      codeShowing: false
    };
    this.toggleCode = this.toggleCode.bind(this);
  }

  toggleCode () {
    this.setState({
      codeShowing: !this.state.codeShowing
    });
  }

  render () {
    return (
      <div className="ExampleContainer">
        <Row>
          <Col xs={12}>
            <h3>{this.props.name}</h3>
          </Col>
        </Row>
        {this.props.children}
        <Row>
          <Col xsOffset={11} xs={1}>
            <button className="ExampleContainer__Button" onClick={this.toggleCode}>Code</button>
          </Col>
        </Row>
        {this.state.codeShowing && (
          <CodeMirror value={this.props.code} options={{mode: 'javascript'}} />
        )}
      </div>
    );
  }
}
