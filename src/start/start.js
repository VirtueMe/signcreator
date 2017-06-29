import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { themr } from 'react-css-themr';
import Loading from 'react-loading';
import { STARTLOADER } from '../identifiers';
import { Container, Row, Col } from 'react-grid-system';

const MyRow = ({ children, rowClass, colClass }) => (
  <Row className={rowClass}>
    <Col xs={12} md={4} offset={{ md: 4 }} className={colClass}>
      { children }
    </Col>
  </Row>
);

const factory = () => {
  class StartContainer extends Component {

    setup() {
      const { children, color, height, isFetching, message, width, theme, type } = this.props;

      if (isFetching) {
        return (
          <Container fluid className={theme.container}>
            <MyRow rowClass={theme.firstrow} colClass={theme.firstcol}>
              <Loading type={type} color={color} height={height} width={width} />
            </MyRow>
            <MyRow rowClass={theme.secondrow} colClass={theme.secondcol}>
              <span className={theme.span}>{ message }</span>
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

  StartContainer.propTypes = {
    theme: PropTypes.shape({
      container: PropTypes.string,
      firstrow: PropTypes.string,
      firstcol: PropTypes.string,
      secondrow: PropTypes.string,
      secondcol: PropTypes.string,
      span: PropTypes.string
    })
  };


  StartContainer.defaultProps = {
    message: 'We are setting up the system...',
    type: 'bubbles',
    color: '#e3e3e3',
    height: '128px',
    width: '100%'
  };

  return StartContainer;
};

const Start = factory();

export default themr(STARTLOADER, null)(Start);

export { factory as startFactory };
export { Start };
