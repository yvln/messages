import { connect } from 'react-redux';

import * as actions from '../../modules/actions/messages';
import { Dispatch, IFullState } from '../../types';
import Form, { IDispatchProps, IStateProps } from './Form';

const mapStateToProps = (state: IFullState): IStateProps => ({
  isFailure: state.messages.post.isFailure,
})

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
  mapStateToProps,
  mapDispatchToProps
)(Form);
