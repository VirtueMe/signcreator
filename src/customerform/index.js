import React from 'react';
import { themr } from 'react-css-themr';
import { customerFormFactory } from './customerform';
import { CUSTOMERFORM } from '../identifiers';
import theme from './theme.css';

const CustomerForm = customerFormFactory();

const ThemedCustomerForm = themr(CUSTOMERFORM, theme)(CustomerForm);

export default ThemedCustomerForm;
export { ThemedCustomerForm as CustomerForm };
