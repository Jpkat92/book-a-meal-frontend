import React from 'react';
import { shallow } from 'enzyme';
import GuestNavBar from './guestNavBar';


describe('GuestNavBar', () => {
    const component = shallow(<GuestNavBar/>);
    
    it('should render a navbar', () => {
        expect(component.find("div#nav").length).toEqual(1)
    });

    it('should render three nav list items ', () => {
        expect(component.find("li").length).toEqual(3)
    });
});
