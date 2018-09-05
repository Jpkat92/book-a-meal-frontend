import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import CheckBoxInput from '../common/checkBoxInput'

const MealListRow = ({meal, toggleCheckBoxChange}) => {
  return (
    <tr>
      <td>
        <CheckBoxInput
            key={meal.id}
            id = {meal.id}
            name={meal.name}
            isChecked={meal.isChecked}
            onCheckboxChange={toggleCheckBoxChange}/>
      </td>
      <td><Link to={'/meals/'+meal.id}>{meal.name}</Link></td>
      <td>${meal.price}</td>
    </tr>
  );
};

MealListRow.propTypes = {
  meal: PropTypes.object.isRequired,
  toggleCheckBoxChange: PropTypes.func.isRequired
};

export default MealListRow;
