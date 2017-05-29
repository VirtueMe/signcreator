import React from 'react';
import { IconMenu, MenuItem } from 'react-toolbox';
import { FontIcon } from 'react-toolbox';

const FormatMenu = ({actions, bold, center, index, italic, menu, selectColor, selectFont, theme}) => (
  <IconMenu icon='text_format' position='topRight' iconRipple={false} menuRipple={false}>
    <MenuItem icon='format_size' caption={menu.increase} key="0" onClick={() => actions.increaseFont(index)}>
      <FontIcon className={theme.width} />
    </MenuItem>
    <MenuItem icon='text_fields' caption={menu.decrease} key="1" onClick={() => actions.decreaseFont(index)}>
      <FontIcon className={theme.width} />
    </MenuItem>
    <MenuItem icon='text_format' caption={menu.font} key="1a" onClick={selectFont}>
      <FontIcon value='' className={theme.width} />
    </MenuItem>
    <MenuItem icon='format_align_center' caption={menu.center} key="2a" onClick={() => actions.toggleCenter(index)}>
      <FontIcon value={ center ? 'checked' : ''} className={theme.width} />
    </MenuItem>
    <MenuItem icon='format_bold' caption={menu.bold} key="2" onClick={() => actions.toggleBold(index)}>
      <FontIcon value={ bold ? 'checked' : ''} className={theme.width} />
    </MenuItem>
    <MenuItem icon='format_italic' caption={menu.italic} key="3" onClick={() => actions.toggleItalic(index)}>
      <FontIcon value={ italic ? 'checked' : ''} className={theme.width} />
    </MenuItem>
    <MenuItem icon='format_color_text' caption={menu.color} key="4" onClick={selectColor}>
      <FontIcon value='' className={theme.width} />
    </MenuItem>
  </IconMenu>
);


export default FormatMenu;

export { FormatMenu };
