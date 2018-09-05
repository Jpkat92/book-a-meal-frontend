import React from 'react';
import PropTypes from 'prop-types'
import CheckBoxInput from '../common/checkBoxInput'

const OrderListRow = ({order, toggleCheckBoxChange}) => {
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
      <td>{order.customer.firstName}</td>
    </tr>
  );
};

OrderListRow.propTypes = {
  order: PropTypes.object.isRequired
};

export default OrderListRow;
