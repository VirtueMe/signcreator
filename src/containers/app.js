import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EmojiList from '../emojiitem/emojilist';
import { small, child } from '../emojiitem/emojiitem';
import * as EmojiActions from '../actions';
import {IconButton} from 'react-toolbox';
import woman from '../images/women.svg';
import man from '../images/man.svg';
import baby from '../images/baby.svg';


const emojis = [
  { image: woman, id: 0},
  { image: man, id: 1},
  { image: woman, size: child, id: 2 },
  { image: man, size: child, id: 3 },
  { image: baby, size: small, id: 4 }
];

class App extends Component {
  initEmoji() {
    const { actions } = this.props;

    actions.initEmoji(emojis, 0);
  }

  clearEmojis() {
    const { actions } = this.props;

    actions.clearEmojis(0);
  }

  render() {
    const { emojis, actions } = this.props;
    const { length } = emojis[0];

    return (
      <div>
        <EmojiList items={emojis[0]} index={0} actions={actions} />

        <IconButton icon="move_to_inbox" accent onClick={e => this.initEmoji(e)} disabled={length} />
        <IconButton icon="delete" accent onClick={e => this.clearEmojis(e)} disabled={!length} />
      </div>
    );
  }
}

App.propTypes = {
  emojis: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    emojis: state.emojis
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
