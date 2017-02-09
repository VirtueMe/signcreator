import React from 'react';

import InputItem from './inputitem';
import EmojiEdit from '../emojiitem';

import { IconButton, Input, FontIcon } from 'react-toolbox';
import { List, ListSubHeader } from 'react-toolbox';

import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox';



const ListTest = () => (
  <List selectable ripple>
    <ListSubHeader caption='Edit sign' key="0" />
    <InputItem key="1" />
    <InputItem key="2" />
    <EmojiEdit key="3" />
  </List>
);

export default ListTest;
