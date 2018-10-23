import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InputControl from './InputControl';

configure({ adapter: new Adapter() });

describe('<InputControl/>', () => {
    let wrapper, spy;
    beforeEach(() => {
        wrapper = shallow(<InputControl />);
    })
    afterEach(() => {
        spy.mockClear();
    });

    it('should call #setUpControl when component mounts', () => {
        spy = jest.spyOn(wrapper.instance(), "setUpControl");
        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalledTimes(1);
    });
});