import React from 'react';
import PropTypes from 'prop-types'
import CheckBoxInput from '../common/forms/checkBoxInput'

const OrderListRow = ({order, isAdminView, toggleCheckBoxChange}) => {
  return (
    <tr>
      <td>
        <CheckBoxInput
            key={order.id}
            id={order.id}
            name={order.meal.name}
            isChecked={order.isChecked}
            onCheckboxChange={toggleCheckBoxChange}/>
      </td>
      <td>{order.meal.name}</td>
      <td>${order.meal.price}</td>
      {isAdminView ? 
        (<td>{order.customer.firstName}</td>):
        (<td></td>)
      }
    </tr>
  );
};

OrderListRow.propTypes = {
  order: PropTypes.object.isRequired,
  isAdminView: PropTypes.bool.isRequired,
  toggleCheckBoxChange: PropTypes.func.isRequired
};

export default OrderListRow;
