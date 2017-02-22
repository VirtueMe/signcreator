import React, { Component, PropTypes } from 'react';
import EmojiItem from './emojiitem';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class EmojiList extends Component {
  findEmoji(id) {
    const { items } = this.props;
    const emoji = items.filter(e => e.id === id)[0];

    console.info(id, items, emoji);

    return {
      emoji,
      index: items.indexOf(emoji)
    };
  }

  render() {
    console.dir(this.props);

    const { actions, items, index, className } = this.props;
    const emojis = items.map(item => (
        <EmojiItem key={item.id} id={item.id} index={index} image={item.image} size={item.size} actions={actions} findEmoji={(id) => this.findEmoji(id)} />
    ));

    console.info(emojis);

    return (
      <div className={className}>
        {emojis}
      </div>
    );
  }
}

EmojiList.propTypes = {
  items: PropTypes.array,
  index: PropTypes.number
};

EmojiList.defaultProps = {
  items: [],
  index: 0
};


export default DragDropContext(HTML5Backend)(EmojiList);
