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

const classNameSelector = createSelector(
  [typeSelector],
  (type) => classNames[type]
);

const generatorSelector = createSelector(
  [typeSelector],
  (type) => generators[type]
);

const imageSelector = createSelector(
  [itemsSelector, settingsSelector, generatorSelector, classNameSelector],
  (items, settings, generator, className) => ({
    image: () => new Promise((resolve) => { const result = generator(items, settings).getImage(); resolve(result); }),
    className: className
  })
);




export { imageSelector };
