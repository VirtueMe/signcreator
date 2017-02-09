import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { imagesSelectorFactory } from './emojiedit';
import { IMAGESSELECTOR } from '../identifiers';
import theme from './theme.css';
import { FontIcon } from 'react-toolbox';

const ImagesSelector = imagesSelectorFactory(FontIcon);

console.dir(Object.keys(theme));

const ThemedImagesSelector = themr(IMAGESSELECTOR, theme)(ImagesSelector);

export default ThemedImagesSelector;
export { ThemedImagesSelector as ImagesSelector };
