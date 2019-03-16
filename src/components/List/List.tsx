import sha1 from 'sha1';
import * as React from 'react';

// import './List.scss';
import Message from './Message';
import { IMessage } from '../../types';

const username = 'yvln';

const data: IMessage[] = [
  {
    username: 'yvln',
    date: '2019-03-15T12:28:24.819Z',
    message: 'Circa hos dies Lollianus primae lanuginis',
    id: "sha1('2019-03-15T12:28:24.819Z-yvln')",
    private: false,
  },
  {
    username: 'tom',
    date: '2019-03-16T06:15:04.385Z',
    message: 'Quid? qui se etiam nunc subsidiis patrimonii aut',
    id: "sha1('2019-03-16T06:15:04.385Z-tom')",
    private: false,
  },
  {
    username: 'zoe',
    date: '2019-03-16T06:45:27.349Z',
    message: 'Quae dum ita struuntur, indicatum est apud Tyrum',
    id: "sha1('2019-03-16T06:45:27.349Z-zoe')",
    private: false,
  },
  {
    username: 'emma',
    date: '2019-03-16T07:03:59.759Z',
    message: 'Et olim licet otiosae sint tribus pacataeque',
    id: "sha1('2019-03-16T07:03:59.759Z-emma')",
    private: false,
  },
  {
    username: 'nico',
    date: '2019-03-16T07:52:16.243Z',
    message: 'Et Epigonus quidem amictu tenus philosophus, ut',
    id: "sha1('2019-03-16T07:52:16.243Z-nico')",
    private: false,
  },
  {
    username: 'yvln',
    date: '2019-03-16T08:28:24.013Z',
    message: 'Raptim igitur properantes ut motus sui rumores',
    id: "sha1('2019-03-16T08:28:24.013Z-yvln')",
    private: false,
  },
  {
    username: 'emma',
    date: '2019-03-16T08:35:31.472Z',
    message: 'Quibus ita sceleste patratis Paulus cruore',
    id: "sha1('2019-03-16T08:35:31.472Z-emma')",
    private: false,
  },
  {
    username: 'nico',
    date: '2019-03-16T08:43:42.285Z',
    message: 'Accedebant enim eius asperitati, ubi inminuta vel',
    id: "sha1('2019-03-16T08:43:42.285Z-nico')",
    private: false,
  },
  {
    username: 'tom',
    date: '2019-03-16T09:01:35.122Z',
    message: 'Victus universis caro ferina est lactisque',
    id: "sha1('2019-03-16T09:01:35.122Z-tom')",
    private: false,
  },
  {
    username: 'zoe',
    date: '2019-03-16T09:59:51.935Z',
    message: 'Duplexque isdem diebus acciderat malum, quod et',
    id: "sha1('2019-03-16T09:59:51.935Z-zoe')",
    private: false,
  },
];

class List extends React.Component<{}> {
  componentDidMount() {
    // console.log(data)
  }

  renderMessage = (message: IMessage) => {
    return <Message data={message} key={(message.id).toString()} />;
  };

  renderList = () => {
    if (!data.length) {
      return;
    }
    
    return data.map(this.renderMessage);
  }

  render() {
    return <div className="List">{this.renderList()}</div>;
  }
}

export default List;
