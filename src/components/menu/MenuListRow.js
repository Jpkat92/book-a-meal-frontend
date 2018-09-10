import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxInput from '../common/forms/checkBoxInput';

const MenuListRow = ({meal, canCheckMeal, toggleCheckBoxChange}) => {
  return (
    <tr>
      <td>
        { canCheckMeal ? (<div></div>) :
        (<CheckBoxInput
            key={meal.id}
            id = {meal.id}
            name={meal.name}
            isChecked={meal.isChecked}
            onCheckboxChange={toggleCheckBoxChange}/>)
        }
      </td>
      <td>{meal.name}</td>
      <td>${meal.price}</td>
    </tr>
  );
};

MenuListRow.propTypes = {
  meal: PropTypes.object.isRequired,
  canCheckMeal: PropTypes.bool.isRequired,
  toggleCheckBoxChange: PropTypes.func.isRequired
};

export default MenuListRow;
