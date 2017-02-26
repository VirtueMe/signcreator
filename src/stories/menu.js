import React from 'react';
import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox';

const AddLineMenu = () => (
  <IconMenu icon='add_circle' position='topLeft' menuRipple>
    <MenuItem key='0' value="download" icon='text_fields' caption="Legg til tekstlinje" />
    <MenuItem key='1' value="iconline" icon='insert_photo' caption="Legg til emojilinje" />
    <MenuItem key='2' value="divider" icon='remove' caption="Legg til delelinje" />
  </IconMenu>
);

export default AddLineMenu;
