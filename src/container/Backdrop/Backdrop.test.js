import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Backdrop from './Backdrop';

configure({adapter: new Adapter()});

describe('<Backdrop/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Backdrop/>);
    })
    it('should return null when no props.show is false or undefined', () => {
        expect(wrapper.find('.Backdrop')).toHaveLength(0);
    })

    it('should return html when props.show is true', () => {
        wrapper.setProps({show: true});
        expect(wrapper.find('.Backdrop')).toHaveLength(1);
    })

});