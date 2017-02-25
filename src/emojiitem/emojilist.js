import React, { Component, PropTypes } from 'react';
import EmojiItem from './emojiitem';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class EmojiList extends Component {
  findEmoji(id) {
    const { value } = this.props;
    const emoji = value.filter(e => e.id === id)[0];

    return {
      emoji,
      index: value.indexOf(emoji)
    };
  }

  render() {
    const { actions, value, index, className } = this.props;

    const items = value.map(item => (
        <EmojiItem key={item.id} id={item.id} index={index} image={item.image} size={item.size} actions={actions} findEmoji={(id) => this.findEmoji(id)} />
    ));

    return (
      <div className={className}>
        {items.length ? items : null}
      </div>
    );
  }
}

EmojiList.propTypes = {
  value: PropTypes.array,
  index: PropTypes.number
};

EmojiList.defaultProps = {
  value: [],
  index: 0
};


export default DragDropContext(HTML5Backend)(EmojiList);