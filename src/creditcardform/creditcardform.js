import React, { Component } from 'react';

import { PropTypes }  from 'prop-types';

import { themr } from 'react-css-themr';

import { CREDITCARDFORM } from '../identifiers';

import { Dropdown, Input } from 'react-toolbox';

import { Container, Row, Col } from 'react-grid-system';

const months = [
  { value: '01', label: '01' },
  { value: '02', label: '02' },
  { value: '03', label: '03' },
  { value: '04', label: '04' },
  { value: '05', label: '05' },
  { value: '06', label: '06' },
  { value: '07', label: '07' },
  { value: '08', label: '08' },
  { value: '09', label: '09' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' }
];

const year = new Date().getFullYear();

const years = Array.apply(null, { length: 20 }).map(function(n, index) {
  const value = year + index;

  return { value: value.toString().slice(-2), label: value };
});

const factory = () => {
  const RowCol = ({width, children}) => (
    <Row>
      <Col xs={width}>
        {children}
      </Col>
    </Row>
  );

  class CreditcardForm extends Component {
    createError(valid, text) {
      if (valid) {
        return null;
      }
      return (
        <span>{text}</span>
      );
    }

    createImage(logo, alt) {
      const { theme } = this.props;

      if (logo) {
        return (
          <RowCol width={12}>
            <div className="dibs_brand_assets">
              <img src={logo} alt={alt} className={theme.providerimage} />
            </div>
          </RowCol>
        );
      }

      return null;
    }
    createDecription(text) {
      if (text) {
        return (
          <RowCol width={12}>
            {text}
          </RowCol>
        );
      }

      return null;
    }
    render() {
      const { actions, number, numberValid, month, year, ccv2, texts } = this.props;

      const description = this.createDecription(texts.description);
      const logo = this.createImage(texts.logo.src, texts.logo.alt);

      return (
        <Container fluid>
          {description}
          <Row>
            <Col xs={12}>
              <Input
                name="creditcard:number"
                label={texts.number.placeholder}
                value={number}
                error={this.createError(numberValid, texts.number.error)}
                maxLength={16}
                type='number'
                onChange={actions.changeNumber} />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Dropdown
                auto
                label={texts.month.placeholder}
                source={months}
                value={month}
                onChange={actions.changeMonth} />
            </Col>
            <Col xs={6}>
              <Dropdown
                auto
                label={ texts.year.placeholder }
                source={years}
                value={year}
                onChange={actions.changeYear} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                name="creditcard:ccv2"
                label={texts.ccv2.placeholder}
                hint={texts.ccv2.hint}
                value={ccv2}
                type='number'
                onChange={actions.changeCCV2}
                />
            </Col>
          </Row>
          {logo}
        </Container>
      );
    }
  }

  CreditcardForm.propTypes = {
    theme: PropTypes.shape({

    })
  };

  CreditcardForm.defaultProps = {
    texts: {
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
  };

  return CreditcardForm;
};

const CreditcardForm = factory();

export default themr(CREDITCARDFORM, null)(CreditcardForm);

export { factory as creditcardFormFactory };
export { CreditcardForm };
