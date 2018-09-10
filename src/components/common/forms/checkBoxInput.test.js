import React from 'react';
import { shallow } from 'enzyme';
import CheckBoxInput from './checkBoxInput';


describe('CheckBoxInput', () => {
    it('should render a checkbox', () => {
        const id = 1
        const name = "Rice"
        const isChecked = true
        const onChange = jest.fn();
        const error = "Checkbox is not selected"
        
        const component = shallow(<CheckBoxInput 
                                    id={id}
                                    name={name}
                                    defaultChecked={isChecked}
                                    onCheckboxChange={onChange}
                                    error ={error}/>);
        
        component
            .find('input.form-control')
            .simulate('click');

        expect(onChange).toHaveBeenCalled();
        expect(component).toMatchSnapshot();
    });
  });
