import { createSelector } from 'reselect'
import small from './smallimages';
import medium from './mediumimages';
import large from './largeimages';
const typeSelector = state => state.settings.type;

const flattBordersSelector = createSelector(
  typeSelector,
  (type) => {
    switch (type) {
      case 0:
        return large;

      default:
        return medium;
    }
  }
);

const standingBorderSelector = createSelector(
  typeSelector,
  (type) => {
    switch (type) {
      case 1:
        return large;

      default:
        return medium;
    }
  }
);


const decorationBorderSelector = createSelector(
  typeSelector,
  (type) => {
    switch (type) {
      case 0:
        return [...small, ...medium, ...large];

      default:
        return [...small, ...medium];
    }
  }
);

const borderSelector = createSelector(
  [flattBordersSelector, standingBorderSelector, decorationBorderSelector],
  (flatt, standing, decoration) => ({ flatt, standing, decoration})
);

export default borderSelector;
