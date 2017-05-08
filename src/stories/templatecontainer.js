import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { classNameSelector, imageSelector } from '../selectors/image';
import borderSelector from '../selectors/borders';

import TemplateList from '../templatelist';
import * as Actions from '../actions';



function mapStateToProps(state) {
  return {
    items: state.templates.items,
    texts: state.texts.templates
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
)(TemplateList);
