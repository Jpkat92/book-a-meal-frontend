import React from 'react';
import { shallow } from 'enzyme';
import SelectInput from './selectInput';


describe('SelectInput', () => {
    const name = "Day"
    const label = "Day"
    const onChange = jest.fn()
    const defaultOption = "Select a day"
    const placeholder = "Day"
    const value = ""
    const error = ""
    const options = [
                {
                    id: 1,
                    name: "Monday"
                },
                {
                    id: 2,
                    name: "Tuesday"
                },
                {
                    id: 3,
                    name: "Wednesday"
                }
            ]

    const component = shallow(<SelectInput
                        name={name}
                        label={label}
                        onChange={onChange}
                        placeholder={placeholder}
                        defaultOption={defaultOption}
                        options={options}
                        value={value}
                        error={error}/>);

    it('should render input field', () => { 
        expect(component.find('select').length).toEqual(1)    
    });
    it('should handles change of input', () => {
        component
            .find('select')
            .simulate('change');

        expect(onChange).toHaveBeenCalled();
    })
});
