import React, { Component } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import Template from '../template';

class TemplateList extends Component {
  render() {
    return (
      <Container fluid>
        <Col xs={12} md={4}>
          <br />
          <Template />
        </Col>
        <Col xs={12} md={4}>
          <br />
          <Template />
        </Col>
        <Col xs={12} md={4}>
          <br />
          <Template />
        </Col>
      </Container>
    );
  }
}

export default TemplateList;
