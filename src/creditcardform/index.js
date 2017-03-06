import React from 'react';
import { themr } from 'react-css-themr';
import { creditcardFormFactory } from './creditcardform';
import { CREDITCARDFORM } from '../identifiers';
import theme from './theme.css';

const CreditcardForm = creditcardFormFactory();

const ThemedCreditcardForm = themr(CREDITCARDFORM, theme)(CreditcardForm);

export default ThemedCreditcardForm;
export { ThemedCreditcardForm as CreditcardForm };
