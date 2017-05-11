import React, { Component } from 'react';
import { PropTypes }  from 'prop-types';
import classnames from 'classnames';
import { DragSource, DropTarget } from 'react-dnd';
import { FontIcon } from 'react-toolbox';
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
    const { id, index } = props;

    return {
      id,
      index,
      originalIndex: props.findEmoji(id).index
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
  handleMenu = (e) => {
    const { actions, id, index } = this.props;

    console.info('info: ', id, ' : ', index);

    actions.deleteEmoji(id, index);

    e.stopPropagation();
  };

  render() {
    const { clickHandler, connectDragSource, connectDropTarget, image, selected, theme } = this.props;

    const selectButton = selected ? <div className={theme.iconbutton} onClick={this.handleMenu}><FontIcon value='close' className={theme.deleteImage}/></div> : null;

    return connectDragSource(connectDropTarget(
      <div className={classnames(theme.image, { [theme.selected]: selected })} onClick={clickHandler}>
        <img src={image} className={classnames(theme.menuimage)} role='presentation' />
        {selectButton}
      </div>
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
