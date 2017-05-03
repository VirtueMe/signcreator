import React, { Component, PropTypes } from 'react';
import accounting from 'accounting';
import { Row, Col } from 'react-grid-system';

class AmountRow extends Component {
  static defaultProps = {
    amount: 0.0,
    className: '',
    options: {
	    symbol: "kr",
	    decimal: ",",
	    thousand: " ",
	    precision: 2,
	    format: "%v %s"
    },
    text: 'Total:'
  };

  static propTypes = {
    amount: PropTypes.float,
    className: PropTypes.string,
    options: PropTypes.shape({
      symbol: PropTypes.string,
      decimal: PropTypes.string,
      thousand: PropTypes.string,
      precision: PropTypes.number,
      format: PropTypes.string
    }),
    text: PropTypes.string
  };

  render () {
    const { amount, className, options, text, theme } = this.props;

    return (
      <Row className={className}>
        <Col xs={9}>
          {text}
        </Col>
        <Col xs={3} className={theme.amount}>
          {accounting.formatMoney(amount, options)}
        </Col>
      </Row>
    );
  }
};

export default AmountRow;

export { AmountRow };
