import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

import Step1 from '../form';
import * as Actions from '../actions';

import landscapeGenerator from '../canvas/landscape';
import portraitGenerator from '../canvas/portrait';
import SquareGenerator from '../canvas/square';
import heartGenerator from '../canvas/heart';

const generators = [landscapeGenerator, portraitGenerator, SquareGenerator, heartGenerator];
const classNames = ['landscape', 'portrait', 'square', 'heart'];


const typeSelector = state => state.settings.type;
const itemsSelector = state => state.items;
const imageSelector = createSelector(
  [typeSelector, itemsSelector],
  (type, items) => generators[type](items).getImage().image
);

const classNameSelector = createSelector(
  typeSelector,
  type => classNames[type]
);

function mapStateToProps(state) {
  return {
    image: imageSelector(state),
    imageClassName: classNameSelector(state),
    items: state.items,
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step1);
