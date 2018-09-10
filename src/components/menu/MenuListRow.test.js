import React from 'react';
import { shallow } from 'enzyme';
import MenuListRow from './MenuListRow';


describe('MenuListRow', () => {
    const meal = {
        id: 2,
        name: "Naan",
        price: 12,
        isChecked: true
    }
    const canCheckMeal = false
    const toggleCheckboxChange = jest.fn()
    const component = shallow(<MenuListRow
        meal={meal}
        canCheckMeal={canCheckMeal}
        toggleCheckBoxChange={toggleCheckboxChange}/>);

    it('should render a single menu item', () => {
       expect(component).toMatchSnapshot();
    });
});
