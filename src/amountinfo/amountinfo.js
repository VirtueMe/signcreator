import React, { Component } from 'react';
import { PropTypes }  from 'prop-types'; 

import { themr } from 'react-css-themr';
import { Avatar, CardText, CardTitle } from 'react-toolbox';
import { Container } from 'react-grid-system';
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
        amount: 0.0,
        text: 'Skilt 10x15'
      },
      shipping: {
        amount: 0.0,
        text: 'Frakt:',
      },
      fee: {
        amount: 0.0,
        text: 'Fakturagebyr:',
      },
      subTitle: '',
      title: 'Default title',
      total: 479.0,
      texts: {
        options: {
    	    symbol: "kr",
    	    decimal: ",",
    	    thousand: " ",
    	    precision: 2,
    	    format: "%v %s"
        },
        total: 'Total:'
      }
    };

    static propTypes = {
      backplate: PropTypes.shape({
        amount: PropTypes.number,
        text: PropTypes.string,
        type: PropTypes.string
      }),
      fee: PropTypes.shape({
        amount: PropTypes.number,
        text: PropTypes.string
      }),
      item: PropTypes.shape({
        amount: PropTypes.number,
        text: PropTypes.string
      }),
      shipping: PropTypes.shape({
        amount: PropTypes.number,
        text: PropTypes.string
      }),
      subTitle: PropTypes.string,
      texts: PropTypes.shape({
        options: PropTypes.shape({
          symbol: PropTypes.string,
          decimal: PropTypes.string,
          thousand: PropTypes.string,
          precision: PropTypes.number,
          format: PropTypes.string
        }),
        total: PropTypes.string
      }),
      title: PropTypes.string,
      theme: PropTypes.shape({
        total: PropTypes.string
      }),
      total: PropTypes.number
    };

    createAmountRow(item) {
      const { texts, theme } = this.props;

      const row =  item && (item.amount > 0) ? <AmountRow amount={item.amount} options={texts.options} text={item.text} theme={theme} /> : null;

      return row;
    }

    render () {
      const { backplate, fee, item, shipping, subTitle, texts, title, theme, total } = this.props;

      const shippingRow = this.createAmountRow(shipping);
      const feeRow = this.createAmountRow(fee);
      const backplateRow = backplate.type !== noplate ? <AmountRow amount={backplate.amount} options={texts.options} text={backplate.text} theme={theme} /> : null;
      const avatar = <Avatar icon='shopping_cart' className={theme.avatar} />;

      console.info(item.amount, item);

      return (
        <div>
          <CardTitle
            avatar={avatar}
            title={title}
            subtitle={subTitle}
          />
          <CardText>
            <Container fluid>
              <AmountRow amount={item.amount} options={texts.options} text={item.text} theme={theme} />
              {backplateRow}
              {feeRow}
              {shippingRow}
              <AmountRow amount={total} options={texts.options} className={theme.total} text={texts.total} theme={theme} total />
            </Container>
          </CardText>
        </div>
      )
    }
  }

  return AmountInfo;

};

const AmountInfo = factory();

export default themr(AMOUNTINFO, null)(AmountInfo);

export { factory as amountInfoFactory };
export { AmountInfo };
