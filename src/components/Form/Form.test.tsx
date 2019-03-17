import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Form, { IProps } from './Form';

configure({ adapter: new Adapter() });

describe('src/components/Form', () => {
  let props: IProps;

  beforeEach(() => {
    props = {
      fetchMessages: jest.fn(),
      isFailure: false,
      postMessage: jest.fn(),
      username: 'yvln',
    };
  });

  it('should render', () => {
    const component = shallow(<Form {...props} />);
    expect(component).toMatchSnapshot();
  });
});
