import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Container, { IProps } from '.';

configure({ adapter: new Adapter() });

describe('src/components/Container', () => {
  let props: IProps;

  beforeEach(() => {
    props = {
      children: <div>Mama!</div>,
      className: 'Specific-container',
    };
  });

  it('should render', () => {
    const component = shallow(<Container {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should display its children', () => {
    const component = shallow(<Container {...props} />);
    expect(component.text()).toEqual('Mama!');
  });

  it('should have a new className', () => {
    const component = shallow(<Container {...props} />);
    expect(component.hasClass('Container'));
    expect(component.hasClass('Specific-container'));
  });
});
