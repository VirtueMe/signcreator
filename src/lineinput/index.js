import React from 'react';
import { themr } from 'react-css-themr';
import { lineInputFactory } from './lineinput';
import { LINEINPUT } from '../identifiers';
import theme from './theme.css';
import { FontIcon } from 'react-toolbox';

const LineInput = lineInputFactory(FontIcon);

const ThemedLineInput = themr(LINEINPUT, theme)(LineInput);

export default ThemedLineInput;
export { ThemedLineInput as LineInput };
