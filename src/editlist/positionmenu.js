import React  from 'react';

import { IconMenu, MenuDivider, MenuItem } from 'react-toolbox';

const PositionMenu = (props) => {
  const { index, length, texts, actions, deleteLine, children } = props;
  const { moveUp, moveDown } = actions || {};
  const { menu } = texts;
  const { action } = menu;

  return (
    <IconMenu icon='more_vert' position='topRight' iconRipple={false} menuRipple={false}>
      <MenuItem icon='keyboard_arrow_up' caption={action.up} key="0" onClick={() => moveUp(index)} disabled={index === 0} />
      <MenuItem icon='keyboard_arrow_down' caption={action.down} key="1" onClick={() => moveDown(index)} disabled={index + 1 === length}/>
      {children}
      <MenuDivider key="2" />
      <MenuItem icon='delete' caption={action.delete} key="3" onClick={deleteLine} />
    </IconMenu>
  );
};

export default PositionMenu;

export { PositionMenu };
