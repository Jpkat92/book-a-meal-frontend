import React from 'react';
import {PropTypes} from 'prop-types'

const MealSelectCheckbox = ({meal, onMealChecked, error}) => {
  return (
      <div className="checkbox">
        <label htmlFor={meal.name}>
          <input
            type="checkbox"
            name={meal.name}
            className=" pull-right"
            defaultChecked={meal.isChecked}
            onClick={evt => onMealChecked(evt, meal.id)}/>
            {meal.name}
        </label>
          
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
  );
};

MealSelectCheckbox.propTypes = {
  meal: PropTypes.object.isRequired,
  onMealChecked: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default MealSelectCheckbox;
