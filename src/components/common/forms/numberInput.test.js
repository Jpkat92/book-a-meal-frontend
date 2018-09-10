import React from 'react';
import { shallow } from 'enzyme';
import NumberInput from './numberInput';


describe('NumberInput', () => {
    const name = "price"
    const label = "Price"
    const onChange = jest.fn()
    const placeholder = "Price"
    const value = 12
    const error = ""

    const component = shallow(<NumberInput
                        name={name}
                        label={label}
                        onChange={onChange}
                        placeholder={placeholder}
                        value={value}
                        error={error}/>);

    it('should render input field', () => { 
        expect(component.find('input[type="number"]').length).toEqual(1)    
    });
    it('should handles change of input', () => {
        component
            .find('input')
            .simulate('change');

        expect(onChange).toHaveBeenCalled();
    })
});
