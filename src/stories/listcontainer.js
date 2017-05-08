import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import borderSelector from '../selectors/borders';

import EditList from '../editlist';
import * as EmojiActions from '../actions';

function mapStateToProps(state) {
  return {
    items: state.items,
    texts: state.texts.design.editlist,
    decoration: borderSelector(state).decoration
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(EmojiActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditList);
