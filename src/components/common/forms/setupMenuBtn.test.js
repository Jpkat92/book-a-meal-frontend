import React from 'react';
import { shallow } from 'enzyme';
import SetupMenuBtn from './setupMenuBtn';


describe('SetupMenuBtn', () => {
    const clickHandler = jest.fn()
    const component = shallow(<SetupMenuBtn
                                onSetupMenu={clickHandler}/>);

    it('should render button', () => {                                          
        expect(component.find('input[type="submit"]').length).toEqual(1)    
    });

    it('should call clickhandler when clicked', () => {
        component
            .find('input')
            .simulate('click');

        expect(clickHandler).toHaveBeenCalled();
    })
});
