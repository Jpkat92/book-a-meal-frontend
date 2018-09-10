import React from "react";
import PropTypes from 'prop-types'
import MenuListRow from './MenuListRow'
import { caterersFormattedForDropdown } from '../common/selectors'
import SelectInput from '../common/forms/selectInput';
import PlaceOrderBtn from '../common/forms/placeOrderBtn'
import SetupMenuBtn from '../common/forms/setupMenuBtn'

const MenuList = ({menu, meals, isAdmin, onClickButton, toggleMeal, onSelectCaterer, caterer, allCaterers}) => {
    let menuButton, catererList, message, label;
    
    if (isAdmin){
        menuButton = <SetupMenuBtn onSetupMenu={onClickButton}/>
    }
    else {
        menuButton = <PlaceOrderBtn onClickOrder={onClickButton}/>
        catererList = caterersFormattedForDropdown(allCaterers)
        if (!caterer.id) {
            message = 'No caterer is selected'
            label = 'Select a caterer'
        }
        else{
            message = 'No menu set for today'
            label = caterer.firstName+" "+caterer.lastName
        }
    }
    return (
        <div id="menu-list" className="col-md-4">
            <div className="header">
                <h2 style={{'margin':'5px'}}>Daily Menu</h2>               
            </div>
            { isAdmin ? (<p></p>) :
                    (<form>
                        <SelectInput
                            label=""
                            name="caterer"
                            value={caterer.id}
                            defaultOption={label}
                            options={catererList}
                            onChange={onSelectCaterer}/>
                    </form>)
                } 
            {typeof meals !== 'undefined' && meals.length > 0 ?
                (<form>
                    {menuButton}
                    <hr/>
                    {Array.isArray(menu.mealList) && menu.mealList.length === 0 ?
                        (
                            <div className="well">
                                No meals on today's menu
                            </div>
                        ):
                        (   
                            <table className="table">
                            <thead>
                            <tr>
                            <th>-</th>
                            <th>Name</th>
                            <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                                {menu.mealList &&
                                    menu.mealList.map(meal =>
                                    <MenuListRow 
                                        key={meal.id}
                                        canCheckMeal={isAdmin}
                                        meal={meal}
                                        toggleCheckBoxChange={toggleMeal}/>
                                    )
                                }
                                </tbody>
                            </table>
                        )
                    }
                </form>
                ):(<div className="well" style={{'marginTop': '10px'}}>
                    { isAdmin ? 
                        (<h5>Add meals first before setting up daily menu </h5>) :
                        (<h5>{message}</h5>)
                    }    
                </div>
            )
            }
        </div>
    );
  };
  
  MenuList.propTypes = {  
      menu: PropTypes.object.isRequired,
      isAdmin: PropTypes.bool.isRequired,
      onClickButton: PropTypes.func.isRequired,
      toggleMeal: PropTypes.func.isRequired,
      onSelectCaterer: PropTypes.func.isRequired,
      caterer: PropTypes.object.isRequired,
      allCaterers: PropTypes.array.isRequired
  };
  
  export default MenuList;  
