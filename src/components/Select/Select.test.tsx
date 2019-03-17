import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Select, { IProps } from '.';

configure({ adapter: new Adapter() });

describe('src/components/Select', () => {
  let props: IProps;

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      options: [
        {
          label: 'Public',
          value: 'public',
        },
        {
          label: 'Private',
          value: 'private',
        },
      ],
    };
  });

  it('should render', () => {
    const component = shallow(<Select {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should call "onChange" when changing its value', () => {
    const component = mount(<Select {...props} />);
    component.find('select').simulate('change');
    expect(props.onChange).toBeCalled();
  });
});
