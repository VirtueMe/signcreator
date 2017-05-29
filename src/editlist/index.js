import { themr } from 'react-css-themr';
import { editListFactory } from './editlist';
import { EDITLIST } from '../identifiers';
import theme from './theme.css';
import { FontIcon } from 'react-toolbox';

const EditList = editListFactory(FontIcon);

const ThemedEditList = themr(EDITLIST, theme)(EditList);

export default ThemedEditList;
export { ThemedEditList as EditList };
