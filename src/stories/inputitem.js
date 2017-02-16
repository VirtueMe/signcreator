import React from 'react';

import { width } from './editlist.scss';

import { ListItem, IconButton, Input, FontIcon } from 'react-toolbox';

import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox';

const FormatMenu = () => (
  <IconMenu icon='text_format' position='topRight' menuRipple>
    <MenuItem icon='format_bold' caption="Bold" key="0">
      <FontIcon value='checked' className={width} />
    </MenuItem>
    <MenuItem icon='format_italic' caption="Italic" key="1">
      <FontIcon value='' className={width} />
    </MenuItem>
    <MenuItem icon='format_align_center' caption="Align center" key="2">
      <FontIcon value='' className={width} />
    </MenuItem>
  </IconMenu>
);

const PositionMenu = () => (
  <IconMenu icon='more_vert' position='topRight' menuRipple>
    <MenuItem icon='keyboard_arrow_up' caption="Move up" key="0" />
    <MenuItem icon='keyboard_arrow_down' caption="Move down" key="1" />
    <MenuDivider key="2" />
    <MenuItem icon='delete' caption="Delete line" key="3" />
  </IconMenu>
);

const input = <Input type='text' label='Text line' icon='text_fields' />;

const actions = [ <FormatMenu key="0" />, <PositionMenu key="1" /> ];

const InputItem = () => (
  <ListItem
    itemContent={input}
    rightActions={actions}
  />
);

export default InputItem;
