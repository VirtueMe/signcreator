import { themr } from 'react-css-themr';
import { templateListFactory } from './templatelist';
import { TEMPLATELIST } from '../identifiers';
import theme from './theme.css';

const TemplateList = templateListFactory();

const ThemedTemplateList = themr(TEMPLATELIST, theme)(TemplateList);

export default ThemedTemplateList;
export { ThemedTemplateList as TemplateList };
