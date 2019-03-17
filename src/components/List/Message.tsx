import * as React from 'react';

import formatDate from "../../helpers/formatDate";
import { IMessage } from '../../types';
import './Message.scss';

interface IProps {
  key: string;
  data: IMessage;
}

class Message extends React.Component<IProps> {
  renderMessage = (): React.ReactNode => {
    return (
      <>
        <span className="first-line">
          <span className="username">{this.props.data.username}</span> .{' '}
          <span className="date">{formatDate(this.props.data.date)}</span>
        </span>
        <span>{this.props.data.message}</span>
        <span>{this.props.data.private}</span>
      </>
    );
  };

  render() {
    return (
      <div className="Message" key={this.props.data.id}>
        {this.renderMessage()}
      </div>
    );
  }
}

export default Message;
