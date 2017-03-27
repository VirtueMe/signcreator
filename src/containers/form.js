import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { imageSelector } from '../selectors/image';
import borderSelector from '../selectors/borders';
import Form from '../form';
import * as Actions from '../actions';

function mapStateToProps(state) {
  return {
    borders: borderSelector(state),
    image: imageSelector(state),
    items: state.items,
    settings: state.settings,
    index: state.view.index,
    sendstatus: state.sendstatus,
    customer: state.customer,
    payment: state.payment,
    fetch: state.fetch,
    templates: state.templates,
    texts: state.texts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
