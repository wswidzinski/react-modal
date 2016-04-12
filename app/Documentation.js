import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './Documentation.css';

const Documentation = (props) => {
  return (
    <div className="Documentation">
      <Row left="xs" className="Documentation__Header">
        <Col xs={12}>
          <h2 id="documentation">Documentation</h2>
        </Col>
      </Row>
      <Row left="xs" className="Documentation__Content">
        <Col xs={12}>
          <b>NOTE: This documentation is a work in progress.</b>
        </Col>
      </Row>
      <Row left="xs" className="Documentation__Content">
        <Col xs={12}>
          React Modal exports the <code>Modal</code> component which is the interface through
          which you will interact with when using it.
        </Col>
      </Row>
      <Row left="xs" className="Documentation__Content">
        <Col xs={12}>
          <h3 id="props">Props</h3>
          <dl>
            <dt><code>isOpen</code> (boolean) [required]</dt>
            <dd>Used to show or hide the modal.</dd>
            <dt><code>style</code> (object) </dt>
            <dd>
              This allows inline styles to be specified. The object should have two
              sub-objects, <code>content</code> and <code>overlay</code>, which describe
              styles to be applied to the content of the modal and the underlying overlay.
            </dd>
            <dt><code>appElement</code> (HTMLElement)</dt>
            <dd>Used to set the AppElement for the modal via props.</dd>
            <dt><code>onRequestClose</code> (function)</dt>
            <dd>This function is called when the modal is going to close.</dd>
            <dt><code>closeTimeoutMS</code> (number)</dt>
            <dd>This can be used to delay closing the modal by a given amount of milliseconds.</dd>
            <dt><code>ariaHideApp</code> (boolean)</dt>
            <dd>This determines if the AppElement should be aria-hidden. Defaults to true.</dd>
            <dt><code>shouldCloseOnOverlayClick</code> (boolean)</dt>
            <dd>This determines if clicking on the overlay will close the modal. Defaults to true.</dd>
          </dl>
        </Col>
      </Row>
    </div>
  );
};

export default Documentation;