import React from 'react';
import { shallow } from 'enzyme';
import PlaceOrderBtn from './placeOrderBtn';


describe('PlaceOrderBtn', () => {
    const clickHandler = jest.fn()
    const component = shallow(<PlaceOrderBtn
                                onClickOrder={clickHandler}/>);

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
