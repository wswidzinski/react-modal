import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ExampleContainer from './ExampleContainer';
import BasicExample, {sampleCode as BasicExampleCode} from './examples/BasicExample';
import CloseOnEscExample, {sampleCode as CloseOnEscExampleCode} from './examples/CloseOnEscExample';
import InlineStylesExample, {sampleCode as InlineStylesExampleCode} from './examples/InlineStylesExample';
import CSSClassesExample, {sampleCode as CSSClassesExampleCode} from './examples/CSSClassesExample';
import GlobalStylesExample, {sampleCode as GlobalStylesExampleCode} from './examples/GlobalStylesExample';
import AppElementExample, {sampleCode as AppElementExampleCode} from './examples/AppElementExample';
import './Examples.css';

const Examples = (props) => {
  return (
    <div>
      <Row left="xs" className="Examples">
        <Col xs={12}>
          <h2 id="examples">Examples</h2>
        </Col>
      </Row>
      <Row left="xs">
        <Col xs={12}>
          <ExampleContainer name="Basic Example" code={BasicExampleCode}>
            <BasicExample />
          </ExampleContainer>
        </Col>
      </Row>
      <Row left="xs">
        <Col xs={12}>
          <ExampleContainer name="Close on ESC Example" code={CloseOnEscExampleCode}>
            <CloseOnEscExample />
          </ExampleContainer>
        </Col>
      </Row>
      <Row left="xs">
        <Col xs={12}>
          <ExampleContainer name="Use Inline Styles to Style" code={InlineStylesExampleCode}>
            <InlineStylesExample />
          </ExampleContainer>
        </Col>
      </Row>
      <Row left="xs">
        <Col xs={12}>
          <ExampleContainer name="Use CSS Classes to Style" code={CSSClassesExampleCode}>
            <CSSClassesExample />
          </ExampleContainer>
        </Col>
      </Row>
      <Row left="xs">
        <Col xs={12}>
          <ExampleContainer name="Use Global Overrides to style multiple instances" code={GlobalStylesExampleCode}>
            <GlobalStylesExample />
          </ExampleContainer>
        </Col>
      </Row>
      <Row left="xs">
        <Col xs={12}>
          <ExampleContainer name="Use setAppElement for accessibility" code={AppElementExampleCode}>
            <AppElementExample />
          </ExampleContainer>
        </Col>
      </Row>
    </div>
  );
};

export default Examples;