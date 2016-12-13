import React from 'react';
import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox';

const AddLineMenu = () => (
  <IconMenu icon='add_circle' position='topLeft' menuRipple>
    <MenuItem value="download" icon='text_fields' caption="Legg til tekstlinje" />
    <MenuItem value="iconline" icon='insert_photo' caption="Legg til emojilinje" />
    <MenuItem value="divider" icon='remove' caption="Legg til delelinje" />
  </IconMenu>
);

export default AddLineMenu;
