import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('<Spinner/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Spinner />);
    });
    it('should have Modal className', () => {
        expect(wrapper.find('.Spinner')).toHaveLength(1);
    });
});