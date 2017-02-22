import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EmojiList from '../emojiitem/emojilist';
import { small, child } from '../emojiitem/emojiitem';
import * as EmojiActions from '../actions';
import {IconButton} from 'react-toolbox';

class App extends Component {
  render() {
    const { emojis, actions } = this.props;
    const { length } = emojis[0];

    return (
      <EmojiList items={emojis[0]} index={0} actions={actions} />
    );
  }
}

App.propTypes = {
  emojis: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  console.info(state);
  
  return {
    emojis: [state.emojis]
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
)(App);
