import { connect } from 'react-redux';

import * as actions from '../../modules/actions/messages';
import { Dispatch } from '../../types';
import Form, { IDispatchProps } from './Form';

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
  return {
    fetchMessages: () => {
      dispatch(actions.fetchMessages());
    },
    postMessage: (message: string, isPrivate: boolean, username: string) => {
      dispatch(actions.postMessage(message, isPrivate, username));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
