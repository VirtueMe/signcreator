import React, { Component } from 'react';

import InputItem from '../textitem';
import EmojiEdit from '../emojiitem';
import Menu from './menu';
import {Cond, eq} from 'react-cond';
import {SketchPicker} from 'react-color';

import { Dialog, IconMenu, List, ListItem, MenuDivider, MenuItem } from 'react-toolbox';

const listItems = (props) => {

  return list;
};

const PositionMenu = (props) => {
  const { index, length, texts, actions, deleteLine, children } = props;
  const { moveUp, moveDown } = actions || {};
  const { menu } = texts;
  const { action } = menu;

  return (
    <IconMenu icon='more_vert' position='topRight' menuRipple>
      <MenuItem icon='keyboard_arrow_up' caption={action.up} key="0" onClick={() => moveUp(index)} disabled={index === 0} />
      <MenuItem icon='keyboard_arrow_down' caption={action.down} key="1" onClick={() => moveDown(index)} disabled={index + 1 === length}/>
      {children}
      <MenuDivider key="2" />
      <MenuItem icon='delete' caption={action.delete} key="3" onClick={deleteLine} />
    </IconMenu>
  );
};

class EditList extends Component {
  state = {
    show_delete: false,
    show_color: false
  };

  showDelete(display, index=null) {
    this.setState({ show_delete: display, index: index });
  }

  cancelDelete = () => {
    this.showDelete(false);
  }

  cancelColor = () => {
    this.showColor(false);
  }

  showColor(display, index=null, color=null) {
    console.info('color start: ', color);

    this.setState({
      show_color: display,
      index: index,
      color: color || {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      }
    });
  }

  selectColor() {
    this.showColor(false);
  }

  colorChanged = (color) => {
    const { actions } = this.props;
    const { changeTextColor } = actions;
    const { rgb } = color;

    console.info('color set: ', color);

    changeTextColor(this.state.index, rgb);
    this.setState({ color: rgb });
  };


  deleteLine() {
    const { actions } = this.props;
    const { deleteLine } = actions;

    deleteLine(this.state.index);
    this.showDelete(false);
  }

  render() {
    const { items, actions, texts } = this.props;

    const delete_actions = [
      { label: texts.dialogs.remove.buttons.cancel, onClick: () => this.cancelDelete() },
      { label: texts.dialogs.remove.buttons.delete, onClick: () => this.deleteLine() }
    ];

    const color_actions = [
      { label: texts.dialogs.color.buttons.cancel, onClick: () => this.cancelColor() },
      { label: texts.dialogs.color.buttons.select, onClick: () => this.selectColor() }
    ];

    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }

    const list = items.map((item, index) => {
      const menu = ({children}) => (
        <PositionMenu index={index} length={items.length} actions={actions} texts={texts} deleteLine={() => this.showDelete(true, index)}>
          {children}
        </PositionMenu>
      );

      return (
        <Cond value={item.type}>
          {[ eq(1), <InputItem key={index} {...item} index={index} actions={actions} menu={menu} selectColor={() => this.showColor(true, index, item.color )} /> ]}
          {[ eq(2), <EmojiEdit key={index} {...item} index={index} actions={actions} menu={menu} /> ]}
        </Cond>
      );
    });

    return (
      <div>
      { this.state.show_color ? <div style={ popover }>
        <div style={ cover } onClick={ this.cancelColor }/>
        <SketchPicker color={this.state.color} width={300} onChange={ this.colorChanged } /> </div> : null }

        <List>
          <ListItem rightActions={[<Menu actions={actions} />]} />
          {list}
        </List>

        <Dialog
            actions={delete_actions}
            active={this.state.show_delete}
            onEscKeyDown={this.cancelDelete}
            onOverlayClick={this.cancelDelete}
            title={texts.dialogs.remove.title}
          >
          <p>{texts.dialogs.remove.description}</p>
        </Dialog>

      </div>
    )
  }
}

EditList.defaultProps = {
  items: [],

  actions: {},

  texts: {
    menu: {
      action: {
        delete: 'Slett',
        down: 'Flytt ned',
        up: 'Flytt opp'
      }
    },

    dialogs: {
      remove: {
        title: 'Bekreft sletting',
        description: 'Slette linjen?',
        buttons: {
          cancel: 'Avbryt',
          delete: 'Slett'
        }
      },

      color: {
        title: 'Velg tekst farge',
        buttons: {
          cancel: 'Avbryt',
          select: 'Velg'
        }
      }
    }
  }
};

export default EditList;
