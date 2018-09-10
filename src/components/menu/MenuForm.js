import React from 'react';
import PropTypes from 'prop-types'
import SelectInput from '../common/forms/selectInput';
import MealCheckboxList from './MealCheckboxList';

const MenuForm = ({menu, meals, allDays, onCreateMenu, onMealToggle, selectedDay, onSelectDay, creating, errors}) => {
    let day = null;
    if(selectedDay === null){
        day = "Select a day"
    }
    else{
        switch(selectedDay){
            case "1":
                day = "Monday";
                break;
            case "2":
                day = "Tuesday";
                break;
            case "3":
                day = "Wednesday";
                break;
            case "4":
                day = "Thursday";
                break;
            case "5":
                day = "Friday";
                break;
            case "6":
                day = "Saturday";
                break;
            case "7":
                day = "Sunday";
                break;
            default:
                break;
        }
    }
    
    return (
        <form>
            <h1>Manage Daily Menus</h1>
            <SelectInput
                label="Select a Day"
                name="day"
                value={menu.day.name}
                defaultOption={day}
                options={allDays}
                error={errors.dayId}
                onChange={onSelectDay}/>
            <div className="field">
                <label>Select meals to add</label>
                <MealCheckboxList
                    meals={meals}
                    error={errors}
                    onMealToggle={onMealToggle}/>
            </div>
            <br/>
            <input
                type="submit"
                disabled={creating}
                value={creating ? 'Creating Menu...': 'Create Menu'}
                className="btn btn-primary btn-sm"
                onClick={onCreateMenu}/>
        </form>
  );
};

MenuForm.propTypes = {
  menu: PropTypes.object.isRequired,
  meals: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onCreateMenu: PropTypes.func.isRequired,
  onMealToggle: PropTypes.func.isRequired,
  selectedDay: PropTypes.object.isRequired,
  onSelectDay: PropTypes.func.isRequired,
  creating: PropTypes.bool,
  errors: PropTypes.object
};

export default MenuForm;
