import React from 'react';
import { shallow } from 'enzyme';
import MealListRow from './MealListRow';


describe('MealListRow', () => {
    const meal = {
        id: 2,
        name: "Naan",
        price: 12,
        isChecked: true
    }
    const toggleCheckboxChange = jest.fn()

    const component = shallow(<MealListRow
        meal={meal}
        toggleCheckBoxChange={toggleCheckboxChange}/>);

    it('should render a single meal', () => {
        expect(component).toMatchSnapshot();
     });
});
