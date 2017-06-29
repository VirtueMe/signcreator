import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import borderSelector from '../selectors/borders';
import { imageSelector, smallImageSelector } from '../selectors/image';
import { priceSelector } from '../selectors/price';
import Form from '../form';
import * as Actions from '../actions';
import { push, goBack } from 'react-router-redux';

function imageCreators(state) {
  const small = smallImageSelector(state);
  const large = imageSelector(state);

  return { small, large };
}

function mapStateToProps(state, props) {
  return {
    amountoptions: state.texts.amount,
    borders: borderSelector(state),
    image: imageCreators(state),
    items: state.items,
    settings: state.settings,
    sendstatus: state.sendstatus,
    customer: state.customer,
    payment: state.payment,
    price: priceSelector({ ...state, currency: props.currency }),
    prices: state.prices,
    fetch: state.fetch,
    templates: state.templates,
    texts: state.texts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...Actions, push, goBack }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
