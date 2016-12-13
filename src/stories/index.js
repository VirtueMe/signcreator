import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import DropDown from './signdropdown';
import LineDropdown from './linedropdown';
import AddLineMenu from './menu';
import EditList from './editlist';
import App from '../App';
import 'material-design-icons/iconfont/material-icons.css';


storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
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

storiesOf('EditList', module)
  .add('show', () => (
    <EditList />
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
