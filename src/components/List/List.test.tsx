import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import List, { IProps } from './List';

configure({ adapter: new Adapter() });

describe('src/components/List', () => {
  let props: IProps;

  beforeEach(() => {
    props = {
      fetchMessages: jest.fn(),
      isFailure: false,
      isPending: false,
      messages: [
        {
          username: 'zoe',
          date: '2019-03-16T09:59:51.935Z',
          message: 'Duplexque isdem diebus acciderat malum, quod et',
          id: "sha1('2019-03-16T09:59:51.935Z-zoe')",
          private: false,
        },
      ],
    };
  });

  it('should render', () => {
    const component = shallow(<List {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should display a loader when is fetching and no messages yet.', () => {
    const component = mount(<List {...props} isPending={true} messages={[]} />);
    expect(component.text()).toContain('...');
  });

  it('should display an information when no messages and is not fetching', () => {
    const component = mount(<List {...props} messages={[]} />);
    expect(component.text()).toContain('No messages yet.');
  });

  it('should be blurred when is fetching but there are already messages', () => {
    const component = shallow(<List {...props} isPending={true} />);
    expect(component.hasClass('List-blur'));
  });
});
