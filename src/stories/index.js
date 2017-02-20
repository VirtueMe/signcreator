import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';
import DropDown from './signdropdown';
import LineDropdown from './linedropdown';
import AddLineMenu from './menu';
import EditList from '../editlist';
import App from '../App';
import EmojiItem, { small, child } from '../emojiitem/emojiitem';
import EmojiList from '../containers/app';
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'

import icons from 'material-design-icons/iconfont/material-icons.css';

const store = configureStore();

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('EditList')}/>
  ));

storiesOf('App', module)
  .add('show', () => (
    <App />
  ));

storiesOf('Sign selector', module)
  .add('show', () => (
    <DropDown />
  ));

storiesOf('Line selector', module)
  .add('Top', () => (
    <LineDropdown label='Top linje' />
  ))
  .add('Left', () => (
    <LineDropdown label='Venstre linje' />
  ))
  .add('Høyre', () => (
    <LineDropdown label='Høyre linje' />
  ))
  .add('Bottom', () => (
    <LineDropdown label='Bunn linje' />
  ));

storiesOf('Add line menu', module)
  .add('show', () => (
    <AddLineMenu />
  ));

let items = [{ type: 1 }, { type: 1 }, { type: 2 } ]

let actions = {
  addText: function() {
    items.push({ type: 1 });
  },
  addEmoji: function() {
    items.push({ type: 2 });
  },
  deleteLine: function(index) {
    items.splice(index, 1);
  }
};

storiesOf('EditList', module)
  .add('show', () => (
    <EditList items={items} actions={actions} />
  ));

storiesOf('EmojiItem', module)
  .add('list', () => (
    <Provider store={store}>
      <EmojiList />
    </Provider>
  ));
