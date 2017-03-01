import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Preview from './index';
import * as Actions from '../actions';
import imagegenerator from '../canvas/heart.js'
import heart from '../images/heart.png';



function mapStateToProps(state) {
  const {image} = imagegenerator([{ value: 'Her bor:', height: 12 }, { value: '', height: 12 }, { value: 'Familien Thomas', height: 12 }]).getImage();

  return {
    image: image,
    className: 'heart',
    style: {
      backgroundImage: 'url(' + heart + ')'
    }
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
)(Preview);
