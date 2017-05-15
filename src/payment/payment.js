import React, { Component } from 'react';
import { PropTypes }  from 'prop-types';

import { themr } from 'react-css-themr';
// import { Accordion, Chord } from 'react-toolbox-additions';
import { Accordion, AccordionItem } from 'react-sanfona';
import { FontIcon } from 'react-toolbox';

import CreditcardForm from '../creditcardform';
import { PAYMENTOPTIONS } from '../identifiers';

const factory = () => {
  class PaymentOptions extends Component {

    labelSet(selected, icon, title) {
      const { theme } = this.props;

      return (
        <div className={theme['react-sanfona-item-title']}><FontIcon value={selected} />&nbsp;<span><FontIcon value={icon} /><span className={theme.chordlabel}>&nbsp;{title}</span></span></div>
      );
    }

    render() {
      const { actions, payment, texts, theme } = this.props;
      const email = this.labelSet(payment.type === 0 ? 'radio_button_checked' : 'radio_button_unchecked', 'email', texts.email.title);
      const creditcard = this.labelSet(payment.type !== 0 ? 'radio_button_checked' : 'radio_button_unchecked', 'payment', texts.creditcard.title);

      console.info(payment.type, theme);

      return (
        <Accordion openNextAccordionItem={true} activeItems={payment.type} className={theme['react-sanfona']} onChange={({activeItems}) => { actions.changePayment( activeItems.length > 0 ? activeItems[0] : payment.type ); } }>
          <AccordionItem title={email} expanded={payment.type === 0} className={theme['react-sanfona-item']} bodyClassName={theme['react-sanfona-item-body']} expandedClassName={theme['react-sanfona-item-expanded']}>
            <div className={theme.emailbody}>
              {texts.email.description}
            </div>
          </AccordionItem>
          <AccordionItem title={creditcard} expanded={payment.type !== 0} className={theme['react-sanfona-item']} bodyClassName={theme['react-sanfona-item-body']} expandedClassName={theme['react-sanfona-item-expanded']}>
            <CreditcardForm actions={actions} texts={texts.creditcard} {...payment}/>
          </AccordionItem>
        </Accordion>
/*
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
*/
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
