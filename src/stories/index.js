import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';
import DropDown from './signdropdown';
import LineDropdown from '../frames/linedropdown';
import AddLineMenu from './menu';
import EditList from './listcontainer';
import App from '../App';
import EmojiItem, { small, child } from '../emojiitem/emojiitem';
import EmojiList from './emojicontainer';
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import woman from '../images/farger/mor-mellom2.png';
import man from '../images/farger/far-mellom2.png';
import boy from '../images/farger/gutt-mellom2.png';
import girl from '../images/farger/jente-mellom2.png';
import icons from 'material-design-icons/iconfont/material-icons.css';
import LandscapePreview from '../preview/landscapepreview';
import PortraitPreview from '../preview/portraitpreview';
import SquarePreview from '../preview/squarepreview';
import HeartPreview from '../preview/heartpreview';


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

let img1 = document.createElement('img');
let img2 = document.createElement('img');
let img3 = document.createElement('img');
let img4 = document.createElement('img');

img1.src = woman;
img2.src = man;
img3.src = girl;
img4.src = boy;

let items = {
  items: [
    { type: 1, value: 'Benny', height: 12 },
    { type: 1, value: '', height: 12 },
    {
      type: 2,
      value: [
        { image: woman, id: 0, size: { height: 50, width: 19 }, img: img1 },
        { image: man, id: 1, size: { height: 50, width: 18 }, img: img2 },
        { image: girl, id: 2, size: { height: 50, width: 14 }, img: img3 },
        { image: boy, id: 3, size: { height: 50, width: 11 }, img: img4 }
      ]
    }
  ]
};

storiesOf('EditList', module)
  .add('show', () => {
    const store = configureStore(items);

    return (
      <Provider store={store}>
        <EditList />
      </Provider>
    );
  });

storiesOf('images', module)
  .add('landscape', () => {
    const store = configureStore(items);

    return (
      <Provider store={store}>
        <LandscapePreview />
      </Provider>
    );
  })
  .add('portrait', () => {
    const store = configureStore(items);

    return (
      <Provider store={store}>
        <PortraitPreview />
      </Provider>
    );
  })
  .add('square', () => {
    const store = configureStore(items);

    return (
      <Provider store={store}>
        <SquarePreview />
      </Provider>
    );
  })
  .add('heart', () => {
    const store = configureStore(items);

    return (
      <Provider store={store}>
        <HeartPreview />
      </Provider>
    );
  });



storiesOf('EmojiItem', module)
  .add('list', () => {
    let emojis = {
      items: [{
        type: 2,
        value: [
          { image: woman, id: 0 },
          { image: man, id: 1 },
          { image: girl, id: 2 },
          { image: boy, id: 3 }
        ]
      }]
    };
    const store = configureStore(emojis);

    return (
      <Provider store={store}>
        <EmojiList />
      </Provider>
    );
  });
