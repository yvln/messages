import { connect } from 'react-redux';

import * as actions from '../../modules/actions';
import { Dispatch, IFullState } from '../../types';
import List, { IDispatchProps, IStateProps } from './List';

const mapStateToProps = (state: IFullState): IStateProps => ({
  isFailure: state.messages.get.isFailure,
  isPending: state.messages.get.isPending,
  messages: state.messages.list,
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  fetchMessages: () => {
    dispatch(actions.fetchMessages());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
