import React from 'react';
import { shallow } from 'enzyme';
import DeleteOrderBtn from './deleteOrderBtn';


describe('DeleteOrderBtn', () => {
    it('should render with click handler', () => {
        const clickHandler = jest.fn()
        const isDeleting = false

        const component = shallow(<DeleteOrderBtn
                                        deleting={isDeleting}
                                        onClickDelete={clickHandler}/>);
                                        
        component
            .find('input')
            .simulate('click');

        expect(clickHandler).toHaveBeenCalled();
        expect(component).toMatchSnapshot();    
    });
});
