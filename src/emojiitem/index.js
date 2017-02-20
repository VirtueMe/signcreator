import React from 'react';
import { themr } from 'react-css-themr';
import { imagesSelectorFactory } from './emojiedit';
import { IMAGESSELECTOR } from '../identifiers';
import theme from './theme.css';
import { FontIcon } from 'react-toolbox';

const ImagesSelector = imagesSelectorFactory(FontIcon);

const ThemedImagesSelector = themr(IMAGESSELECTOR, theme)(ImagesSelector);

export default ThemedImagesSelector;
export { ThemedImagesSelector as ImagesSelector };
