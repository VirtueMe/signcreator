import React, { Component } from 'react';

// import Transition from './motion.js';
import Design from './design';
import Payment from './payment';
import Receipt from './receipt';
import TemplateList from './templates';

import { Router, Route, browserHistory } from 'react-router';


class Form extends Component {
  render() {
    const { actions, borders, customer, image, imageClassName, index, items, payment, sendstatus, settings, templates, texts } = this.props;

    const view = [
      () => (<TemplateList key='templates' actions={actions} texts={texts.templates} templates={templates} items={texts.design.settings.selector.items} />),
      () => (<Design key='design' actions={actions} borders={borders} image={image} imageClassName={imageClassName} items={items} settings={settings} texts={texts.design}  />),
      () => (<Payment key='payment' actions={actions} customer={customer} image={image} items={items} payment={payment} settings={settings} sendstatus={sendstatus} texts={texts.payment} />),
      () => (<Receipt key='receipt' actions={actions} customer={customer} payment={payment}  texts={texts.receipt} />)
    ];

    return (
      <Router history={history}>
        <Route path="/" component={view[0]}>
          <Route path="edit" component={view[1]} />
          <Route path="payment" component={view[2]} />
          <Route path="receipt" component={view[3]} />
        </Route>
      </Router>
    );
  }
}

export default Form;
