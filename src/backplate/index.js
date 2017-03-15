import { themr } from 'react-css-themr';
import { backPlateFactory } from './backplate';
import { BACKPLATE } from '../identifiers';
import theme from './theme.css';

const Backplate = backPlateFactory();

const ThemedBackplate = themr(BACKPLATE, theme)(Backplate);

export default ThemedBackplate;
export { ThemedBackplate as Backplate };
