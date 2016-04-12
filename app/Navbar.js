import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './Navbar.css';

const Header = (props) => {
  return (
    <Row center="xs" className="Navbar">
      <Col xs={6}>
        <a className="Navbar__Link" href="#documentation">Documentation</a>
      </Col>
      <Col xs={6}>
        <a className="Navbar__Link" href="#examples">Examples</a>
      </Col>
    </Row>
  );
};

export default Header;