import * as React from 'react';
import { connect } from 'react-redux';

import * as actions from '../modules/actions';
import { Dispatch, IFullState } from '../types';
import Form from './Form';
import List from './List';

import './App.scss';

interface IStateProps {
  username: string | undefined;
}

interface IDispatchProps {
  getUser: () => void;
}

export type IProps = IStateProps & IDispatchProps;

class App extends React.Component<IProps> {
  componentDidMount() {
    if (!this.props.username) {
      this.props.getUser();
    }
  }

  render() {
    return (
      <div className="App">
        <Form />
        <List />
      </div>
    );
  }
}

const mapStateToProps = (state: IFullState): IStateProps => ({
  username: state.user.name,
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  getUser: () => {
    dispatch(actions.getUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
