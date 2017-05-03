import { themr } from 'react-css-themr';
import { amountInfoFactory } from './amountinfo';
import { AMOUNTINFO } from '../identifiers';
import theme from './theme.css';

const AmountInfo = amountInfoFactory();

const ThemedAmountInfo = themr(AMOUNTINFO, theme)(AmountInfo);

export default ThemedAmountInfo;
export { ThemedAmountInfo as AmountInfo };
