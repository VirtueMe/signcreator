import React from 'react';
import { IconMenu, MenuItem } from 'react-toolbox';

const AddLineMenu = (props) => {
  const { addTextLine, addEmojiLine, addDividerLine } = props.actions;

  return (
  <IconMenu key='0' icon='add_circle' position='topRight' iconRipple={false} menuRipple={false}>
    <MenuItem key="1" value="download" icon='text_fields' caption="Legg til tekstlinje" onClick={addTextLine} />
    <MenuItem key="2" value="iconline" icon='insert_photo' caption="Legg til emojilinje" onClick={addEmojiLine} />
    <MenuItem key="3" value="divider" icon='remove' caption="Legg til delelinje"  onClick={addDividerLine} ripple={true} />
  </IconMenu>
)};

AddLineMenu.defaultProps = {
  actions: {}
};

export default AddLineMenu;
