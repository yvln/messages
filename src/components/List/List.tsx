import * as React from 'react';

import { IMessage } from '../../types';
import Container from '../Container';
import Message from '../ListMessage';
import './List.scss';

export interface IStateProps {
  isFailure: boolean;
  isPending: boolean;
  messages: IMessage[];
}

export interface IDispatchProps {
  fetchMessages: () => void;
}

interface IDefaultProps {
  messages: IMessage[];
}

export type IProps = IDefaultProps &
  IStateProps &
  IDispatchProps;

class List extends React.Component<IProps> {
  static defaultProps = {
    messages: [],
  };

  componentDidMount() {
    this.props.fetchMessages();
  }

  renderError = () => {
    return (
      <div className="text">
        Unable to fetch messages. Please try again later.
      </div>
    );
  }

  renderMessage = (message: IMessage) => {
    return <Message data={message} key={message.id.toString()} />;
  };

  renderList = () => {
    const hasNoMessages = !this.props.messages.length && !this.props.isPending;
    const isFetchingMessages = !this.props.messages.length && this.props.isPending

    if (this.props.isFailure) {
      this.renderError();
    }

    if (hasNoMessages) {
      return <div className="text">No messages yet.</div>;
    }

    if (isFetchingMessages) {
      return <div className="text">...</div>;
    }

    return this.props.messages.map(this.renderMessage);
  };

  render() {
    const isRefetching = this.props.messages.length && this.props.isPending;

    return (
      <Container className={`List ${isRefetching ? 'List-blur' : ''}`}>
        {this.renderList()}
      </Container>
    );
  }
}

export default List;
