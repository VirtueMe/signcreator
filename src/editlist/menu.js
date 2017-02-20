import React from 'react';
import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox';

const AddLineMenu = (props) => {
  const { addText, addEmoji, addLine } = props.actions;

  return (
  <IconMenu icon='add_circle' position='topRight' menuRipple>
    <MenuItem value="download" icon='text_fields' caption="Legg til tekstlinje" onClick={addText} />
    <MenuItem value="iconline" icon='insert_photo' caption="Legg til emojilinje" onClick={addEmoji} />
    <MenuItem value="divider" icon='remove' caption="Legg til delelinje"  onClick={addLine} />
  </IconMenu>
)};

AddLineMenu.defaultProps = {
  actions: {}
};

export default AddLineMenu;
