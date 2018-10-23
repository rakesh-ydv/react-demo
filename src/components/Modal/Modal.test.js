import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from './Modal';
import Backdrop from '../../container/Backdrop/Backdrop';

configure({ adapter: new Adapter() });

describe('<Modal/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Modal />);
    });
    it('should have Modal className', () => {
        expect(wrapper.find('.Modal')).toHaveLength(1);
    });

    it('should have Backdrop Component', () => {
        expect(wrapper.find(Backdrop)).toHaveLength(1);
    });

});