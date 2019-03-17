import * as React from 'react';

import { IMessage } from '../../types';
import Container from '../Container';
import './List.scss';
import Message from './Message';

export interface IStateProps {
  isFailure: boolean;
  isPending: boolean;
  messages: IMessage[];
}

export interface IDispatchProps {
  fetchMessages: () => void;
}

interface IInjectedProps {
  username?: string;
}

interface IDefaultProps {
  messages: IMessage[];
}

export type IProps = IDefaultProps &
  IStateProps &
  IDispatchProps &
  IInjectedProps;

class List extends React.Component<IProps> {
  static defaultProps = {
    messages: [],
  };

  componentDidMount() {
    this.props.fetchMessages();
  }

  componentDidUpdate(prevProps: IProps) {
    if (prevProps.messages.length !== this.props.messages.length) {
      this.setState({
        messages: this.props.messages,
      });
    }
  }

  renderMessage = (message: IMessage) => {
    return <Message data={message} key={message.id.toString()} />;
  };

  renderList = () => {
    if (this.props.isFailure) {
      return (
        <div className="text">
          Unable to fetch messages. Please try again later.
        </div>
      );
    }

    if (!this.props.messages.length && !this.props.isPending) {
      return <div className="text">No messages yet.</div>;
    }

    if (!this.props.messages.length && this.props.isPending) {
      return <div className="text">...</div>;
    }

    return this.props.messages.map(this.renderMessage);
  };

  render() {
    const isToBlur = this.props.messages.length && this.props.isPending;

    return (
      <Container className={`List ${isToBlur ? 'List-blur' : ''}`}>
        {this.renderList()}
      </Container>
    );
  }
}

export default List;
