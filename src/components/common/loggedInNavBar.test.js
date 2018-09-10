import React from 'react';
import { shallow } from 'enzyme';
import LoggedInNavBar from './loggedInNavBar';


describe('LoggedInNavBar', () => {
    const username = "james"
    const component = shallow(<LoggedInNavBar
                                    username={username}/>);

    it('should render a navbar', () => {
        expect(component.find("div#nav").length).toEqual(1)
    });

    it('should render three nav list items ', () => {
        expect(component.find("li").length).toEqual(3)
    });

    it('should render username passed as prop', () => {
        expect(component.find("strong").text()).toContain(username)
    });
});
