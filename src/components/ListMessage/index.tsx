import * as React from 'react';

import formatDate from '../../helpers/formatDate';
import { IMessage } from '../../types';
import './ListMessage.scss';

interface IProps {
  key: string;
  data: IMessage;
}

class ListMessage extends React.Component<IProps> {
  renderMessage = (): React.ReactNode => {
    const isPrivate = this.props.data.private;
    return (
      <>
        <div className="ListMessage-FirstLine">
          <div className="ListMessage-FirstLine--text">
            <span className="username">{this.props.data.username}</span> .{' '}
            <span className="date">{formatDate(this.props.data.date)}</span>
          </div>
          <div
            className={`ListMessage-FirstLine--badge ${
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
      <div className="ListMessage">
        {this.renderMessage()}
      </div>
    );
  }
}

export default ListMessage;
