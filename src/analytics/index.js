import { Component } from 'react';
import { PropTypes } from 'prop-types';

var currentID = null;

function addScript(id, page) {
  if(!id) {
    throw new Error('Google analytics ID is undefined');
  }

  /* eslint-disable */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  /* eslint-enable */

  ga('create', id, 'auto');
  ga('set', 'anonymizeIp', true);
  ga('require', 'displayfeatures');
  ga('require', 'ecommerce');

  pageView(page);
}

function sendItemsData (tranID, amount, shipping, currency, items) {
  ga('ecommerce:addTransaction', {
    'id': tranID,
    'revenue': amount,
    'shipping': shipping,
    'currency': currency  // local currency code.
  });

  items.forEach(function(item) {
    ga('ecommerce:addItem', {
      'id': tranID,
      'name': item.name,
      'sku': item.sku,
      'price': item.amount,
      'quantity': item.quantity,
      'currency': currency // local currency code.
    });
  });

  ga('ecommerce:send');
}

function ga(method, reference, options /*, action , label */) {
  if (window.ga) {
    window.ga(method, reference, options);
  }
  else {
    console.info(method, reference, options);
  }
}

function pageButtonEvent(eventName) {
  window.ga('send', 'event', 'button', 'click', eventName);
}


function pageView(page) {
  var options = null;

  if (page) {
    options = {
      'page': page
    };
  }
  ga('send', 'pageview', options);
}


class GoogleAnalyticsComponent extends Component {
 componentDidMount() {
    if(!GoogleAnalyticsComponent.isInitialized()) {
      GoogleAnalyticsComponent.init(this.props.id, this.props.page || '/step-info');
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }

  static init(id, page) {
    if(!id) {
      throw new Error('Google analytics ID is undefined');
    }

    if(GoogleAnalyticsComponent.isInitialized()) {
      throw new Error('Google analytics is already initialized');
    }

    currentID = id;

    addScript(currentID, page);
  }

  static isInitialized() {
    return !!GoogleAnalyticsComponent.getID();
  }

  static getID() {
    return currentID;
  }
}

GoogleAnalyticsComponent.propTypes = {
  id: PropTypes.string,
  page: PropTypes.string
};

export default GoogleAnalyticsComponent;

export {
  ga,
  pageButtonEvent,
  pageView,
  sendItemsData,
  GoogleAnalyticsComponent
};
