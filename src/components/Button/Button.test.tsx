import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Button, { IProps } from '.';

configure({ adapter: new Adapter() });

describe('src/components/Button', () => {
  let props: IProps;

  beforeEach(() => {
    props = {
      children: 'Go',
      onClick: jest.fn(),
    };
  });

  it('should render', () => {
    const component = shallow(<Button {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should display its children', () => {
    const component = shallow(<Button {...props} />);
    expect(component.text()).toEqual('Go');
  });

  it('should call "onClick" when clicking on it', () => {
    const component = shallow(<Button {...props} />);
    component.find('button').simulate('click');
    expect(props.onClick).toBeCalled();
  });
});
