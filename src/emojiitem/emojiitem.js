import React, { Component } from 'react';
import { PropTypes }  from 'prop-types';
import classnames from 'classnames';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';

const ItemTypes = {
  Emoji: 'emoji'
};

const emojiTarget = {
  canDrop() {
    return false;
  },

  hover(props, monitor) {
    const { id: draggedId, index } = monitor.getItem();
    const { id: overId } = props;

    if (draggedId !== overId) {
     const { index: overIndex } = props.findEmoji(overId);

     props.actions.moveEmoji(draggedId, overIndex, index);
    }
  }
};


const emojiSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
      originalIndex: props.findEmoji(props.id).index
    };
  },

  endDrag(props, monitor) {
    const { id: droppedId, originalIndex, index } = monitor.getItem();
    const didDrop = monitor.didDrop();

    if (didDrop) {
      props.actions.moveEmoji(droppedId, originalIndex, index);
    }
  }
};

function collect(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

function collectSource(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

class EmojiItem extends Component {
  render() {
    const { clickHandler, connectDragSource, connectDropTarget, image, selected, theme } = this.props;

    return connectDragSource(connectDropTarget(
      <span className={classnames(theme.image, { [theme.selected]: selected })} onClick={clickHandler}><img src={image} className={classnames(theme.menuimage)} role='presentation' /></span>
    ));
  }
}

EmojiItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  className: PropTypes.string
};

export default flow(
  DropTarget(ItemTypes.Emoji, emojiTarget, collect),
  DragSource(ItemTypes.Emoji, emojiSource, collectSource)
)(EmojiItem);
