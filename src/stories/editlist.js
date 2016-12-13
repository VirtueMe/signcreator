import React from 'react';

import { IconButton, Input } from 'react-toolbox';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox';

import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox';

const AddLineMenu = () => (
  <IconMenu icon='add_circle' position='topRight' menuRipple>
    <MenuItem value="download" icon='text_fields' caption="Legg til tekstlinje" />
    <MenuItem value="iconline" icon='insert_photo' caption="Legg til emojilinje" />
    <MenuItem value="divider" icon='remove' caption="Legg til delelinje" />
  </IconMenu>
);

const input = <Input type='text' label='Text line' icon='text_fields' />;

const actions = [ <AddLineMenu /> ];

const ListTest = () => (
  <List selectable ripple>
    <ListSubHeader caption='Explore characters' />
    <ListItem
      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
      caption='Dr. Manhattan'
      legend="Jonathan 'Jon' Osterman"
    />
    <ListItem
      itemContent={input}
      rightActions={actions}
    />
    <ListItem
      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
      caption='Rorschach'
      legend='Walter Joseph Kovacs'
    />
    <ListSubHeader caption='Configuration' />
    <ListCheckbox checked caption='Notify new comics' legend='You will receive a notification when a new one is published' />
    <ListDivider />
    <ListItem caption='Contact the publisher' leftIcon='send' />
    <ListItem caption='Remove this publication' leftIcon='delete' />
  </List>
);

export default ListTest;
