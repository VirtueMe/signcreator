import { themr } from 'react-css-themr';
import { startFactory } from './start';
import { STARTLOADER } from '../identifiers';
import theme from './theme.css';

const Start = startFactory();

const ThemedStart = themr(STARTLOADER, theme)(Start);

export default ThemedStart;
export { ThemedStart as Start };
