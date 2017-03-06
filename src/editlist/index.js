import React, { Component } from 'react';

import InputItem from '../textitem';
import EmojiEdit from '../emojiitem';
import Menu from './menu';
import {Cond, eq} from 'react-cond';

import { Dialog, IconMenu, List, ListItem, MenuDivider, MenuItem } from 'react-toolbox';

const listItems = (props) => {

  return list;
};

const PositionMenu = (props) => {
  const { index, length, texts, actions, deleteLine, children } = props;
  const { moveUp, moveDown } = actions || {};
  const { menu } = texts;
  const { action } = menu;

  console.info(children);

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
    active: false
  };

  cancelDelete = () => {
    this.setState({ active: false, index: null });
  }

  actions = [
    { label: "Avbryt", onClick: () => this.cancelDelete() },
    { label: "Slett", onClick: () => this.deleteLine() }
  ];

  confirmDeleteLine(index) {
    this.setState({ active: true, index: index });
  }

  deleteLine() {
    const { actions } = this.props;
    const { deleteLine } = actions;


    deleteLine(this.state.index);
    this.setState({ active: false, index: null });
  }

  render() {
    const { items, actions, texts } = this.props;

    console.info(this.props);

    const list = items.map((item, index) => {
      const menu = ({children}) => (
        <PositionMenu index={index} length={items.length} actions={actions} texts={texts} deleteLine={() => this.confirmDeleteLine(index)}>
          {children}
        </PositionMenu>
      );

      return (
        <Cond value={item.type}>
          {[ eq(1), <InputItem key={index} {...item} index={index} actions={actions} menu={menu} /> ]}
          {[ eq(2), <EmojiEdit key={index} {...item} index={index} actions={actions} menu={menu} /> ]}
        </Cond>
      );
    });

    return (
      <div>
        <List>
          <ListItem rightActions={[<Menu actions={actions} />]} />
          {list}
        </List>
        <Dialog
            actions={this.actions}
            active={this.state.active}
            onEscKeyDown={this.cancelDelete}
            onOverlayClick={this.cancelDelete}
            title='Bekreft sletting'
          >
          <p>Slette linjen</p>
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
    }
  }
};

export default EditList;
