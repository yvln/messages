import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import React from 'react';

import App, { IProps } from './App';

configure({ adapter: new Adapter() });

describe('src/components/Button', () => {
  let props: IProps;

  beforeEach(() => {
    props = {
      getUsername: jest.fn(),
      username: undefined,
    };
  });

  it('should render', () => {
    const component = shallow(<App {...props} />);
    expect(component).toMatchSnapshot();
  });
});
