import React from "react";
import PropTypes from 'prop-types'
import MealListRow from './MealListRow'

const MealList = ({meals, onAddMeal, onAddToMenu, onToggleMeal, onDeleteMeal, deletingMeal}) => {
    debugger;
    return (
        <div id="meals" className="col-md-4">
             <div className="header">
                <h2 style={{'margin':'5px'}}>Meals</h2>                 
            </div>
            <form>
                <br/>
                <div className="btn-toolbar">
                {meals.length === 0 ?
                ( <p></p> ):(
                    <div>
                    <input type="submit"
                        value="Add to menu" 
                        style={{'marginRight':'5px'}}
                        className="btn btn-success btn-sm"
                        onClick={onAddToMenu}/>
                    <input type="submit"
                        disabled={deletingMeal}
                        value={deletingMeal ? 'Deleting...' : 'Delete Meal(s)'}
                        className="btn btn-danger btn-sm"
                        onClick={onDeleteMeal}/>
                    </div>
                )}
                    <input type="submit"
                        value="Add Meal"
                        className="btn btn-primary btn-sm"
                        onClick={onAddMeal}/>
                </div>
                <hr/>
                {Array.isArray(meals) && meals.length === 0 ?
                (<div className="well">
                    No meals have been added
                </div>
                ):(<table className="table">
                    <thead>
                    <tr>
                    <th> - </th>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                </thead>
                    <tbody>
                    {meals &&
                        meals.map(meal =>
                        <MealListRow 
                            key={meal.id} 
                            meal={meal}
                            toggleCheckBoxChange={onToggleMeal}/>
                        )
                    }  
                    </tbody>
                </table>
                )} 
            </form>
        </div>
    );
  };
  
  MealList.propTypes = {  
    meals: PropTypes.array.isRequired
  };
  
  export default MealList;  
