import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import TextArea, { IProps } from '.';

configure({ adapter: new Adapter() });

describe('src/components/TextArea', () => {
  let props: IProps;

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      value: 'This is a value',
    };
  });

  it('should render', () => {
    const component = shallow(<TextArea {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should display its value', () => {
    const component = mount(<TextArea {...props} />);
    expect(component.text()).toEqual('This is a value');
  });
});
