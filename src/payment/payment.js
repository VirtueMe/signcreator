import React, { Component } from 'react';
import { PropTypes }  from 'prop-types';

import { themr } from 'react-css-themr';
import { Accordion, Chord } from 'react-toolbox-additions';
import { FontIcon } from 'react-toolbox';

import CreditcardForm from '../creditcardform';
import { PAYMENTOPTIONS } from '../identifiers';

const factory = () => {
  class PaymentOptions extends Component {
    render() {
      const { actions, payment, texts, theme } = this.props;

      console.info(theme);

      return (
        <Accordion index={payment.type} onChange={actions.changePayment}>
          <Chord labelIcon={<FontIcon value='email' />} label={texts.email.title}>
            <div>
              {texts.email.description}
            </div>
          </Chord>
          <Chord labelIcon={<FontIcon value='payment' />} label={texts.creditcard.title} className={theme.creditcardpane}>
            <CreditcardForm actions={actions} texts={texts.creditcard} {...payment}/>
          </Chord>
        </Accordion>
      );
    }
  }

  PaymentOptions.propTypes = {
    theme: PropTypes.shape({
      crecitcardpane: PropTypes.string
    })
  };

  PaymentOptions.defaultProps = {
    type: 0,
    actions: {

    },
    texts: {
      email: {
        title: 'Faktura',
        description: 'Faktura sendes på epost',
      },
      creditcard: {
        title: 'Kredittkort',
        description: 'Her legger du inn kreditkortopplysningene for kreditkortet du ønsker å benytte.',
        number: {
          placeholder: 'Kreditkort nummer',
          error: 'Ugyldig kortnummer'
        },
        month: {
          placeholder: 'MM'
        },
        year: {
          placeholder: 'ÅÅ'
        },
        ccv2: {
          placeholder: 'CCV2',
          hint: 'Se baksiden på kortet ditt'
        },
        logo: {
          src: 'https://cdn.dibspayment.com/logo/checkout/combo/horiz/DIBS_checkout_kombo_horizontal_04.png',
          alt: 'DIBS + Payments made easy'
        }
      }
    }
  };

  return PaymentOptions;
};

const PaymentOptions = factory();

export default themr(PAYMENTOPTIONS, null)(PaymentOptions);

export { factory as paymentOptionsFactory };
export { PaymentOptions };
