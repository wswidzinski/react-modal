import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './Header.css';

const Header = (props) => {
  return (
    <Row center="xs" className="Header">
      <Col >
        <div>
          <Row center="xs">
            <div className="Header__Icon"></div>
          </Row>
          <Row center="xs">
            <div className="Header__Title">
              <h1>React Modal</h1>
            </div>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Header;