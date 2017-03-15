import { themr } from 'react-css-themr';
import { paymentOptionsFactory } from './payment';
import { PAYMENTOPTIONS } from '../identifiers';
import theme from './theme.css';

const PaymentOptions = paymentOptionsFactory();

const ThemedPaymentOptions = themr(PAYMENTOPTIONS, theme)(PaymentOptions);

export default ThemedPaymentOptions;
export { ThemedPaymentOptions as PaymentOptions };
