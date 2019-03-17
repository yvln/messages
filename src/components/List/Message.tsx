import * as React from 'react';

import formatDate from '../../helpers/formatDate';
import { IMessage } from '../../types';
import './Message.scss';

interface IProps {
  key: string;
  data: IMessage;
}

class Message extends React.Component<IProps> {
  renderMessage = (): React.ReactNode => {
    const isPrivate = this.props.data.private;
    return (
      <>
        <div className="Message-FirstLine">
          <div className="Message-FirstLine--text">
            <span className="username">{this.props.data.username}</span> .{' '}
            <span className="date">{formatDate(this.props.data.date)}</span>
          </div>
          <div
            className={`Message-FirstLine--badge ${
              isPrivate ? 'Badge-private' : 'Badge-public'
            }`}
          >
            {isPrivate ? 'Private' : 'Public'}
          </div>
        </div>
        <div>{this.props.data.message}</div>
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
