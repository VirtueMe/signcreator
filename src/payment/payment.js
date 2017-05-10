import React, { Component } from 'react';
import { PropTypes }  from 'prop-types';

import { themr } from 'react-css-themr';
import { Accordion, Chord } from 'react-toolbox-additions';
import { FontIcon } from 'react-toolbox';

import CreditcardForm from '../creditcardform';
import { PAYMENTOPTIONS } from '../identifiers';

const factory = () => {
  class PaymentOptions extends Component {

    labelSet(icon, title) {
      const { theme } = this.props;

      return (
        <span><FontIcon value={icon} /><span className={theme.chordlabel}>&nbsp;{title}</span></span>
      );
    }

    render() {
      const { actions, payment, texts, theme } = this.props;
      const email = this.labelSet('email', texts.email.title);
      const creditcard = this.labelSet('payment', texts.creditcard.title);

      console.info(theme);

      return (
        <Accordion index={payment.type} onChange={actions.changePayment}>
          <Chord labelIcon={<FontIcon value={payment.type === 0 ? 'radio_button_checked' : 'radio_button_unchecked'} />} label={email}>
            <div>
              {texts.email.description}
            </div>
          </Chord>
          <Chord labelIcon={<FontIcon value={payment.type === 0 ? 'radio_button_unchecked' : 'radio_button_checked'} />} label={creditcard} className={theme.creditcardpane}>
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
