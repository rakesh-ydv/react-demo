import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Modal from './components/Modal/Modal';


configure({ adapter: new Adapter() });

describe('<App/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

describe('<App/> Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should show Modal component when error occurs', () => {
    wrapper.setState({ isError: true });
    wrapper.update();
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
})

