import React from 'react';
import { shallow } from 'enzyme';
import OrderListRow from './OrderListRow';


describe('OrderListRow', () => {
    const order = { 
        id: 1, 
        meal: {
            name: "Rice",
            price: 10
        },
        customer: {
            id: 1,
            firstName: "John",
            lastName: "Doe"
        },
     };
    const isAdmin = true
    const handleCheckboxChange = jest.fn();
    
    it('should render a single order', () => {
        const component = shallow(<OrderListRow 
                                    order={order}
                                    isAdminView={isAdmin}
                                    toggleCheckBoxChange={handleCheckboxChange}/>);
    
      expect(component).toMatchSnapshot();
    });
  });
