import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DirectionSummary from './DirectionSummary';

configure({adapter: new Adapter()});

describe('<DirectionSummary/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<DirectionSummary/>);
    });
    it('should have not display value when no props set', () => {
        expect(wrapper.html()).toBe('<div>Total Distance: </div><div>Total Time: </div>');
    });

    it('should have display value when props set', () => {
        wrapper.setProps({directionData: {
            'total_distance' : 11,
            'total_time': 11
        }});
        expect(wrapper.html()).toBe('<div>Total Distance: 11</div><div>Total Time: 11</div>');
    });

});