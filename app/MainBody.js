import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Documentation from './Documentation';
import Examples from './Examples';
import './MainBody.css';

const MainBody = (props) => {
  return (
    <Row className="MainBody">
      <Col >
        <div>
          <Row center="xs">
            <div className="MainBody__Description">
              React Modal is an accessible modal component for React.
              It maintains that accessibility is a key and very important property
              of modern web applications.  The maintainers seek to make sure that
              React Modal's primary focus is accessibility while also providing
              a functional, capable modal component for general use.
            </div>
          </Row>
          <Documentation />
          <Examples />
        </div>
      </Col>
    </Row>
  );
};

export default MainBody;