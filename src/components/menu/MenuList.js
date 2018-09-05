import React from "react";
import PropTypes from 'prop-types'
import MenuListRow from './MenuListRow'
import PlaceOrderBtn from '../common/placeOrderBtn'
import SetupMenuBtn from '../common/setupMenuBtn'

const MenuList = ({menu, meals, isAdmin, onClickButton, toggleMeal}) => {
    let menuButton;
    if (isAdmin){
        menuButton = <SetupMenuBtn onSetupMenu={onClickButton}/>
    }
    else {
        menuButton = <PlaceOrderBtn onClickOrder={onClickButton}/>
    }
    debugger;
    return (
        <div id="menu-list" className="col-md-4">
            <div className="header">
                <h2 style={{'margin':'5px'}}>Daily Menu</h2>                 
            </div>
            {meals.length > 0 ?
                (<form>
                    <br/>
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
                ):
            (<div className="well">Add meals first before setting up daily menu</div>)
            }
        </div>
    );
  };
  
  MenuList.propTypes = {  
      menu: PropTypes.object.isRequired,
      isAdmin: PropTypes.bool.isRequired
  };
  
  export default MenuList;  
