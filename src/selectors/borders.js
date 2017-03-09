import { createSelector } from 'reselect'
import imageArrayBuilder from './imagearraybuilder';

import xsmall from './xtrasmallimages';
import small from './smallimages';
import medium from './mediumimages';
import large from './largeimages';

const typeSelector = state => state.settings.type;

const flattBordersSelector = createSelector(
  typeSelector,
  (type) => {
    switch (type) {
      case 0:
        return imageArrayBuilder(...large);

      default:
        return imageArrayBuilder(...medium);
    }
  }
);

const standingBorderSelector = createSelector(
  typeSelector,
  (type) => {
    switch (type) {
      case 1:
        return imageArrayBuilder(...large);

      default:
        return imageArrayBuilder(...medium);
    }
  }
);


const decorationBorderSelector = createSelector(
  typeSelector,
  (type) => {
    switch (type) {
      case 0:
        return imageArrayBuilder(...[...xsmall, ...small, ...medium, ...large]);

      default:
        return imageArrayBuilder(...[...xsmall, ...small, ...medium]);
    }
  }
);

const borderSelector = createSelector(
  [flattBordersSelector, standingBorderSelector, decorationBorderSelector],
  (flatt, standing, decoration) => ({ flatt, standing, decoration})
);

export default borderSelector;
