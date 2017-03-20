import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../loader';
import * as Actions from '../actions';

function mapStateToProps(state) {
  return {
    fetch: state.fetch,
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
)(Loader);
