import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';
import SignDropdown from '../signselector/signdropdown';
import AddLineMenu from './menu';
import CustomerForm from './customerformcontainer'
import EditList from './listcontainer';
import Design from './step1container';
import Payment from './step2container';
import Receipt from './step3container';
import Form from '../containers/form';
import App from '../App';
import EmojiList from './emojicontainer';
import LineDropdown from './linecontainer';
import Settings from './settingscontainer';
import PaymentOptions from './paymentoptionscontainer';
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import icons from 'material-design-icons/iconfont/material-icons.css';
import Template from '../template';
import TemplateList from './templatecontainer';
import AmountInfo from '../amountinfo';

import LandscapePreview from '../preview/landscapepreview';
import PortraitPreview from '../preview/portraitpreview';
import SquarePreview from '../preview/squarepreview';
import HeartPreview from '../preview/heartpreview';
import AnimationExample from './motion';
import testdata from './testdata';
import StartContainer from '../start';
import Loader from './loadercontainer';
import { Card } from 'react-toolbox';
import imagemapper from '../utils/imagemapper';



let state = testdata;

const project = 'GBN';


storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('EditList')}/>
  ));

storiesOf('Template', module)
  .add('show', () => (
    <Template theme={{}}/>
  ))
  .add('list', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <TemplateList />
      </Provider>
    );
  });


storiesOf('Start', module)
    .add('Start', () => (
      <StartContainer isFetching={true} project={project} />
    ))
    .add('Loader', () => {
      const store = configureStore(state);

      return (
        <Provider store={store}>
          <App project={project} />
        </Provider>
      );
    });

storiesOf('App', module)
  .add('show', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <App project={project} />
      </Provider>
    );
  });

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
    );
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
    );
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
  .add('Design', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <Design toPayment={ action('button-click') } />
      </Provider>
    );
  })
  .add('Payment', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <Payment toReceipt={ action('button-click') } />
      </Provider>
    );
  })
  .add('Receipt', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <Receipt showDesign={ action('button-click') } />
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

const portrait = { amount: 399.0, text: 'Stående skilt 15x10cm' };
const white = { amount: 15.0, text: 'Hvit plast bakplate', type: '1' };
const aluminium = { amount: 30.0, text: 'Børstet aluminium bakplate', type: '2' };

const swedish = {
  options: {
    symbol: "SEK",
    decimal: ",",
    thousand: " ",
    precision: 2,
    format: "%v %s"
  },
  total: 'Totalen:'
};

const euro = 9.42872965;
const sek = 0.978679035;

const finnish = {
  options: {
    symbol: "€",
    decimal: ",",
    thousand: " ",
    precision: 2,
    format: "%s %v"
  },
  total: 'Totala:'
};

storiesOf('Amounts', module)
  .add('Norwegian without backplate fee and shipping', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <Card>
          <AmountInfo item={portrait} total={portrait.amount} />
        </Card>
      </Provider>
    );
  })
  .add('Norwegian with white backplate and without fee and shipping', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <Card>
          <AmountInfo item={portrait} backplate={white} total={portrait.amount+white.amount} />
        </Card>
      </Provider>
    );
  })
  .add('Norwegian with aluminium backplate and without fee and shipping', () => {
    const store = configureStore(state);

    return (
      <Provider store={store}>
        <Card>
          <AmountInfo item={portrait} backplate={aluminium} texts={swedish} total={portrait.amount+aluminium.amount} />
        </Card>
      </Provider>
    );
  })
  .add('Swedish without backplate fee and shipping', () => {
    const store = configureStore(state);

    const item = Object.assign({}, portrait, { amount: portrait.amount / sek })

    return (
      <Provider store={store}>
        <Card>
          <AmountInfo item={item} texts={swedish} total={item.amount} />
        </Card>
      </Provider>
    );
  })
  .add('Swedish with white backplate and without fee and shipping', () => {
    const store = configureStore(state);

    const item = Object.assign({}, portrait, { amount: portrait.amount / sek });
    const backplate = Object.assign({}, white, { amount: white.amount / sek });

    return (
      <Provider store={store}>
        <Card>
          <AmountInfo item={item} backplate={backplate} texts={swedish} total={item.amount+backplate.amount} />
        </Card>
      </Provider>
    );
  })
  .add('Swedish with aluminium backplate and without fee and shipping', () => {
    const store = configureStore(state);

    const item = Object.assign({}, portrait, { amount: portrait.amount / sek });
    const backplate = Object.assign({}, aluminium, { amount: aluminium.amount / sek });

    return (
      <Provider store={store}>
        <Card>
          <AmountInfo item={item} backplate={backplate} texts={swedish} total={item.amount+backplate.amount} />
        </Card>
      </Provider>
    );
  })
  .add('Finnish without backplate fee and shipping', () => {
    const store = configureStore(state);

    const item = Object.assign({}, portrait, { amount: portrait.amount / euro });

    return (
      <Provider store={store}>
        <Card>
          <AmountInfo item={item} texts={finnish} total={item.amount} />
        </Card>
      </Provider>
    );
  })
  .add('Finnish with white backplate and without fee and shipping', () => {
    const store = configureStore(state);

    const item = Object.assign({}, portrait, { amount: portrait.amount / euro });
    const backplate = Object.assign({}, white, { amount: white.amount / euro });

    return (
      <Provider store={store}>
        <Card>
          <AmountInfo item={item} backplate={backplate} texts={finnish} total={item.amount+backplate.amount} />
        </Card>
      </Provider>
    );
  })
  .add('Finnish with aluminium backplate and without fee and shipping', () => {
    const store = configureStore(state);

    const item = Object.assign({}, portrait, { amount: portrait.amount / euro });
    const backplate = Object.assign({}, aluminium, { amount: aluminium.amount / euro });

    return (
      <Provider store={store}>
        <Card>
          <AmountInfo item={item} backplate={backplate} texts={finnish} total={item.amount+backplate.amount} />
        </Card>
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
          { image: imagemapper.f_fb, id: 0 },
          { image: imagemapper.f_gb, id: 1 },
          { image: imagemapper.f_jb, id: 2 },
          { image: imagemapper.f_mb, id: 3 }
        ]
      }]
    };
    const store = configureStore(emojis);

    return (
      <Provider store={store}>
        <div style={ { width: '250px' }}>
          <EmojiList />
        </div>
      </Provider>
    );
  });
