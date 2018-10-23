import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MapComponent from './MapComponent';

configure({ adapter: new Adapter() });

describe('<InputControl/>', () => {
    let wrapper, spy;
    beforeEach(() => {
        wrapper = shallow(<MapComponent directionData={{ testValue: 'test' }} />);
    })
    afterEach(() => {
        spy.mockClear();
    });
    it('should call #initMap() when component mounts', () => {
        spy = jest.spyOn(wrapper.instance(), "initMap");
        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call #initMap() when component componentDidUpdate called with snapShot="UPDATE_MAP"', () => {
        spy = jest.spyOn(wrapper.instance(), "initMap");
        wrapper.instance().componentDidUpdate({}, {}, "UPDATE_MAP");
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('#getSnapshotBeforeUpdate() should return "UPDATE_MAP" when called with directionData=null', () => {
        wrapper.setProps({ directionData: null });
        const returnedValue = wrapper.instance().getSnapshotBeforeUpdate("dummyValue");
        expect(returnedValue).toBe("UPDATE_MAP");
    });
});