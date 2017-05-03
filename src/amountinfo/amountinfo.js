import React, { Component, PropTypes } from 'react';

import { themr } from 'react-css-themr';
import { Card, CardText, CardTitle } from 'react-toolbox';
import { Container, Row, Col } from 'react-grid-system';
import { AmountRow } from './amountrow';
import { AMOUNTINFO } from '../identifiers';


const noplate = '0';

const factory = () => {
  class AmountInfo extends Component {
    static defaultProps = {
      backplate: {
        type: noplate,
        amount: 0,
        text: 'Uten bakplate'
      },
      item: {
        amount: 399.0,
        text: 'Skilt 10x15'
      },
      shipping: {
        amount: 50.0,
        text: 'Frakt:',
      },
      fee: {
        amount: 30.0,
        text: 'Fakturagebyr:',
      },
      subTitle: '',
      title: 'Default title',
      total: 479.0,
      texts: {
        total: 'Total:'
      }
    };

    static propTypes = {
      backplate: PropTypes.shape({
        amount: PropTypes.float,
        text: PropTypes.string,
        type: PropTypes.string
      }),
      fee: PropTypes.shape({
        amount: PropTypes.float,
        text: PropTypes.string
      }),
      item: PropTypes.shape({
        amount: PropTypes.float,
        text: PropTypes.string
      }),
      shipping: PropTypes.shape({
        amount: PropTypes.float,
        text: PropTypes.string
      }),
      subTitle: PropTypes.string,
      texts: PropTypes.shape({
        total: PropTypes.string
      }),
      title: PropTypes.string,
      theme: PropTypes.shape({
        total: PropTypes.string
      }),
      total: PropTypes.float
    };

    createAmountRow(item) {
      const { theme } = this.props;

      const row =  item.amount > 0 ? <AmountRow amount={item.amount} text={item.text} theme={theme} /> : null;

      return row;
    }

    render () {
      const { backplate, fee, item, shipping, subTitle, texts, title, theme, total } = this.props;

      const shippingRow = this.createAmountRow(shipping);
      const feeRow = this.createAmountRow(fee);
      const backplateRow = backplate.type !== noplate ? this.createAmountRow(backplate) : null;

      return (
        <Card>
          <CardTitle
            title={title}
            subtitle={subTitle}
          />
        <CardText>
          <Container fluid>
            <AmountRow amount={item.amount} text={item.text} theme={theme} />
            {backplateRow}
            {feeRow}
            {shippingRow}
            <AmountRow amount={total} className={theme.total} text={texts.total} theme={theme} />
          </Container>
        </CardText>
        </Card>
      )
    }
  }

  return AmountInfo;

};

const AmountInfo = factory();

export default themr(AmountInfo, null)(AmountInfo);

export { factory as amountInfoFactory };
export { AmountInfo };
