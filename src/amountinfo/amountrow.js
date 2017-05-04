import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
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
    const { amount, className, options, text, theme, total } = this.props;

    return (
      <Row className={className}>
        <Col md={8} xs={8}>
          {text}
        </Col>
        <Col md={4} xs={4} className={classnames(theme.amount, { [theme.totalamount]: total })}>
          {accounting.formatMoney(amount, options)}
        </Col>
      </Row>
    );
  }
};

export default AmountRow;

export { AmountRow };
