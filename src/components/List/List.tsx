import * as React from 'react';

import './List.scss';
import { IMessage } from '../../types';
import Container from '../Container';
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
    if (!this.props.messages.length && !this.props.isPending) {
      return 'No messages yet.';
    }

    if (!this.props.messages.length && this.props.isPending) {
      return '...';
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
