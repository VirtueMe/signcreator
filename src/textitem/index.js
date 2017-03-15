import { themr } from 'react-css-themr';
import { textInputFactory } from './inputitem';
import { TEXTINPUT } from '../identifiers';
import theme from './theme.css';
import { FontIcon } from 'react-toolbox';

const TextInput = textInputFactory(FontIcon);

const ThemedTextInput = themr(TEXTINPUT, theme)(TextInput);

export default ThemedTextInput;
export { ThemedTextInput as TextInput };
