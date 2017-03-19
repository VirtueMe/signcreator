import { createSelector } from 'reselect'

import landscapeGenerator from '../canvas/landscape';
import portraitGenerator from '../canvas/portrait';
import SquareGenerator from '../canvas/square';
import heartGenerator from '../canvas/heart';

const generators = [landscapeGenerator, portraitGenerator, SquareGenerator, heartGenerator];
const classNames = ['landscape', 'portrait', 'square', 'heart'];


const typeSelector = state => state.settings.type;
const itemsSelector = state => state.items;
const settingsSelector = state => state.settings;

const imageSelector = createSelector(
  [typeSelector, itemsSelector, settingsSelector],
  (type, items, settings) => ({
    image: new Promise((resolve) => { const result = generators[type](items, settings).getImage(); resolve(result); }),
    className: classNames[type]
  })
);




export { imageSelector };
