import { connect } from 'react-redux';

import * as actions from '../../modules/actions/messages';
import { Dispatch, IFullState } from '../../types';
import Form, { IDispatchProps, IStateProps } from './Form';

const mapStateToProps = (state: IFullState): IStateProps => ({
  isFailure: state.messages.post.isFailure,
  username: state.user.name,
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
  return {
    fetchMessages: () => {
      dispatch(actions.fetchMessages());
    },
    postMessage: (message: string, isPrivate: boolean, username: string) => {
      return new Promise(async (resolve) => {
        await dispatch(actions.postMessage(message, isPrivate, username));
        resolve();
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
