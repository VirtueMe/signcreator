import React from 'react';

import InputItem from './inputitem';

import { IconButton, Input, FontIcon } from 'react-toolbox';
import { List, ListSubHeader } from 'react-toolbox';

import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox';


const ListTest = () => (
  <List selectable ripple>
    <ListSubHeader caption='Edit sign' />
    <InputItem />
    <InputItem />
  </List>
);

export default ListTest;
