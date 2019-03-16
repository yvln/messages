import * as React from 'react';
// import './Message.scss';
import { IMessage } from '../../types';

interface IProps {
  key: string;
  data: IMessage;
}

class Message extends React.Component<IProps> {
  renderMessage = (): React.ReactNode => {
    return (
      <div>
        {this.props.data.username}
        {this.props.data.date}
        {this.props.data.message}
        {this.props.data.private}
      </div>
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
