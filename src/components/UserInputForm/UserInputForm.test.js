import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import UserInputForm from './UserInputForm';
import DirectionSummary from '../DirectionSummary/DirectionSummary';
import InputControl from '../../container/InputControl/InputControl';



configure({ adapter: new Adapter() });


describe('<UserInputForm/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<UserInputForm />);
    });
    

    it('should not render DirectionSummary if no props set', () => {
        expect(wrapper.find(DirectionSummary)).toHaveLength(0);
    });

    it('should render DirectionSummary if  props set', () => {
        wrapper.setProps({
            directionData: {
                'total_distance': 11,
                'total_time': 11
            }
        });
        expect(wrapper.find(DirectionSummary)).toHaveLength(1);
    });

    it('should contain 2  InputControl', () => {
        expect(wrapper.find(InputControl)).toHaveLength(2);
    });

    it('should have text "Starting point" & "Drop-off point" inside InputControl', () => {
        expect(wrapper.find({ labelText: "Starting point" })).toHaveLength(1);
        expect(wrapper.find({ labelText: "Drop-off point" })).toHaveLength(1);
    });

    it('should call #onSubmit() when submit button clicked', () => {
        wrapper = mount(<UserInputForm onSubmitHandler={() => { }} />);
        let instance = wrapper.instance();
        const spy = jest.spyOn(instance, "onSubmit");
        wrapper.find(".submit-btn").simulate("click");
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should not call #onSubmit() if there is no value in to/from field', () => {
        const mockFn = jest.fn();
        wrapper = mount(<UserInputForm onSubmitHandler={mockFn} />);
        let instance = wrapper.instance();
        wrapper.find(".submit-btn").simulate("click");
        expect(mockFn.mock.calls.length).toBe(0);
    });
});