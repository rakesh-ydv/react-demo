import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Layout from './Layout';
import UserInputForm from '../../components/UserInputForm/UserInputForm';
import MapComponent from '../MapComponent/MapComponent';

configure({ adapter: new Adapter() });

describe('<Layout/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Layout />);
    });

    it('should have the user-input-section class defined', () => {
        expect(wrapper.find('.user-input-section')).toHaveLength(1);
    });

    it('should have UserInputForm defined', () => {
        expect(wrapper.find(UserInputForm)).toHaveLength(1);
    });

    it('should have MapComponent defined', () => {
        expect(wrapper.find(MapComponent)).toHaveLength(1);
    });

    it('should call handleReset when Reset button clicked', () => {
        wrapper = mount(<Layout />);
        let instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'handleReset');
        wrapper.find('.reset-btn').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
    });

});