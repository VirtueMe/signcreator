import { createSelector } from 'reselect';

import { landscape, smallLandscape, portrait, smallPortrait, square, smallSquare, heart, smallHeart } from '../canvas';
const generators = [landscape, portrait, square, heart];
const smallGenerators = [smallLandscape, smallPortrait, smallSquare, smallHeart];
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

const smallGeneratorSelector = createSelector(
  [typeSelector],
  (type) => smallGenerators[type]
);

const generator = (items, settings, generator, className) => ({
  get: () => new Promise((resolve) => { const result = generator(items, settings).getImage(); resolve(result); }),
  className: className
});


const imageSelector = createSelector(
  [itemsSelector, settingsSelector, generatorSelector, classNameSelector],
  generator
);

const smallImageSelector = createSelector(
  [itemsSelector, settingsSelector, smallGeneratorSelector, classNameSelector],
  generator
);




export { imageSelector, smallImageSelector };
