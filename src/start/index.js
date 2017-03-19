import React, { Component } from 'react';
import Loading from 'react-loading';
import { Container, Row, Col } from 'react-grid-system';

const MyRow = ({ children }) => (
  <Row>
    <Col xs={12} md={4} offset={{ md: 4 }}>
      { children }
    </Col>
  </Row>
);

class StartContainer extends Component {

  setup() {
    const { isFetching, children, message } = this.props;

    if (isFetching) {
      return (
        <Container fluid>
          <MyRow>
            <Loading type='bubbles' color='#e3e3e3' height='128px' width='100%' />
          </MyRow>
          <MyRow>
            { message }
          </MyRow>
        </Container>
      );
    }

    return (
      <div>
        {children}
      </div>
    );
  }
  render() {
    const element = this.setup();

    return element;
  }
}

StartContainer.defaultProps = {
  message: 'We are setting up the system...'
};

export default StartContainer
