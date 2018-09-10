import React from 'react';
import { shallow } from 'enzyme';
import TextFormInput from './textFormInput';


describe('TextFormInput', () => {
    const name = "firstName"
    const value = "James"
    const type = "text"
    const changeHandler = jest.fn()
    const submitStatus = false

    const component = shallow(<TextFormInput
                        name={name}
                        value={value}
                        type={type}
                        submitStatus={submitStatus}
                        handleOnChange={changeHandler}/>);

    it('should render text input field', () => { 
        expect(component.find('input[type="text"]').length).toEqual(1)    
    });
    it('should handles change of input', () => {
        component
            .find('input')
            .simulate('change');

        expect(changeHandler).toHaveBeenCalled();
    })
});
