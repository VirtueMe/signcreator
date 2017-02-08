import React from 'react';

import { width } from './editlist.scss';

import { IconButton, Input, FontIcon } from 'react-toolbox';
import { ListItem } from 'react-toolbox';

import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox';

const FormatMenu = () => (
  <IconMenu icon='text_format' position='topRight' menuRipple>
    <MenuItem icon='format_bold' caption="Bold">
      <FontIcon value='checked' className={width} />
    </MenuItem>
    <MenuItem icon='format_italic' caption="Italic">
      <FontIcon value='' className={width} />
    </MenuItem>
    <MenuItem icon='format_align_center' caption="Align center">
      <FontIcon value='' className={width} />
    </MenuItem>
  </IconMenu>
);

const PositionMenu = () => (
  <IconMenu icon='more_vert' position='topRight' menuRipple>
    <MenuItem icon='keyboard_arrow_up' caption="Move up" />
    <MenuItem icon='keyboard_arrow_down' caption="Move down" />
    <MenuDivider />
    <MenuItem icon='delete' caption="Delete line" />
  </IconMenu>
);

const input = <Input type='text' label='Text line' icon='text_fields' />;

const actions = [ <FormatMenu />, <PositionMenu /> ];

const InputItem = () => (
  <ListItem
    itemContent={input}
    rightActions={actions}
  />
);

export default InputItem;
