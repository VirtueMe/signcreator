import { createSelector } from 'reselect'

import { landscape, portrait, square, heart } from '../canvas';
const generators = [landscape, portrait, square, heart];
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
