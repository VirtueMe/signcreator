import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';
import SignDropdown from '../signselector/signdropdown';
import AddLineMenu from './menu';
import CustomerForm from './customerformcontainer'
import EditList from './listcontainer';
import Step1 from './step1container';
import Step2 from './step2container';
import Form from '../containers/form';
import App from '../App';
import EmojiItem, { small, child } from '../emojiitem/emojiitem';
import EmojiList from './emojicontainer';
import LineDropdown from './linecontainer';
import Settings from './settingscontainer';
import PaymentOptions from './paymentoptionscontainer';
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import icons from 'material-design-icons/iconfont/material-icons.css';
import LandscapePreview from '../preview/landscapepreview';
import PortraitPreview from '../preview/portraitpreview';
import SquarePreview from '../preview/squarepreview';
import HeartPreview from '../preview/heartpreview';
import AnimationExample from './motion';
import testdata from './testdata';

let state = testdata;


storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('EditList')}/>
  ));

storiesOf('App', module)
  .add('show', () => (
    <App />
  ));

storiesOf('TransitionMotion', module)
  .add('show', () => (
    <AnimationExample />
  ));


storiesOf('PaymentOptions', module)
  .add('show', () => {
    const paymentState = {
      payment: {
        type: 0,
        number: '',
        month: '',
        year: '',
        ccv2: ''
      }
    };
    const paymentStore = configureStore(paymentState);

    return (
      <Provider store={paymentStore}>
        <PaymentOptions />
      </Provider>
    )
  });

storiesOf('Customerform', module)
  .add('show', () => {
    const customerState = {
      customer: {
        email: '',
        name: '',
        address: '',
        zip: '',
        city: ''
      }
    };
    const customerStore = configureStore(customerState);

    return (
      <Provider store={customerStore}>
        <CustomerForm />
      </Provider>
    )
  });

storiesOf('Sign selector', module)
  .add('show', () => (
    <SignDropdown />
  ));

storiesOf('Settings', module)
  .add('show', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <Settings />
      </Provider>
    );
  });

storiesOf('Steps', module)
  .add('Step 1', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <Step1 toPayment={ action('button-click') } />
      </Provider>
    );
  })
  .add('Step 2', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <Step2 toReceipt={ action('button-click') } />
      </Provider>
    );
  });

storiesOf('Form', module)
  .add('show', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <Form />
      </Provider>
    );
  })


storiesOf('Line selector', module)
  .add('Top', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <LineDropdown label='Top linje' actionIndex='setTop' valueIndex="top" />
      </Provider>
    );
  })
  .add('Left', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <LineDropdown label='Venstre linje'  actionIndex='setLeft' valueIndex="left" />
      </Provider>
    );
  })
  .add('Høyre', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <LineDropdown label='Høyre linje'  actionIndex='setRight' valueIndex="right" />
      </Provider>
    );
  })
  .add('Bottom', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <LineDropdown label='Bunn linje'  actionIndex='setBottom' valueIndex="bottom" />
      </Provider>
    );
  });

storiesOf('Add line menu', module)
  .add('show', () => (
    <AddLineMenu />
  ));


storiesOf('EditList', module)
  .add('show', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <EditList />
      </Provider>
    );
  });

storiesOf('images', module)
  .add('landscape', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <LandscapePreview />
      </Provider>
    );
  })
  .add('portrait', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <PortraitPreview />
      </Provider>
    );
  })
  .add('square', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <SquarePreview />
      </Provider>
    );
  })
  .add('heart', () => {
    const store = configureStore(state);

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
