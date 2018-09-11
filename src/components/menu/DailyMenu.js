import React from "react";
import PropTypes from 'prop-types'

const DailyMenu = ({menu}) => {
    return (
        <div className="col-md-4">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h2 style={{'margin':'5px'}}>{menu.day.name}</h2>                 
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                    {menu.mealList &&
                        menu.mealList.map(meal =>
                            <li className="list-group-item">{meal.name} - ${meal.price}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DailyMenu;
