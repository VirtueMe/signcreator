import React from 'react';
import { themr } from 'react-css-themr';
import { previewFactory } from './preview';
import { PREVIEW } from '../identifiers';
import theme from './theme.css';

const Preview = previewFactory();

const ThemedPreview = themr(PREVIEW, theme)(Preview);

export default ThemedPreview;
export { ThemedPreview as Preview };
