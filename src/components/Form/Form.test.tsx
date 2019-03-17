import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../Button';
import Form, { IProps } from './Form';

configure({ adapter: new Adapter() });

describe('src/components/Form', () => {
  let props: IProps;

  beforeEach(() => {
    props = {
      fetchMessages: jest.fn(),
      postMessage: jest.fn(),
      username: 'yvln',
    };
  });

  it('should render', () => {
    const component = shallow(<Form {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should call `postMessage` when clicking on the button', async() => {
    const component = mount(<Form {...props} />);
    await component.find('button').simulate('click');
    expect(props.postMessage).toBeCalled();
    expect(props.fetchMessages).toBeCalled();
  });
});
