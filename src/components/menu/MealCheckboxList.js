import React from 'react';
import PropTypes from 'prop-types'
import MealSelectCheckbox from './MealSelectCheckbox'

const MealCheckboxList = ({meals, onMealToggle}) => {
    return (
        <div>
            {meals &&
                meals.map(meal =>
                <MealSelectCheckbox 
                    key={meal.id} 
                    meal={meal}
                    onMealChecked={onMealToggle}/>
                )
            }
        </div>
    );
  };
  
    MealCheckboxList.propTypes = {  
    //   meal: PropTypes.object.isRequired,
    //   onMealChecked: PropTypes.func.isRequired
  };
  
  export default MealCheckboxList;  
