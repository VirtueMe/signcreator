import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import DropDown from './signdropdown';
import LineDropDown from './linedropdown';
import App from '../App';

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
    .add('show', () => (
      <LineDropDown />
    ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
