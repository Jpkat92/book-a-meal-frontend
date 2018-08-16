import React, { Component } from "react";
 
class Menu extends Component {
  render() {
    return (
        <div id="daily_menu">
            <div className="header">
                <h2 style={{margin:'5px'}}>Today's Menu</h2>                 
            </div>
            
            <ul id="menuList">
                <li><input type="checkbox" name="option1" value=""/>Rice and Chicken</li>
                <li><input type="checkbox" name="option2" value=""/>Rice and Fish</li>                        
                <li><input type="checkbox" name="option6" value=""/>Fries and Beef</li>
                <li><input type="checkbox" name="option5" value=""/>Potatoes and Meat</li>
                <li><input type="checkbox" name="option6" value=""/>Fries and Beef</li>
            </ul>  
            <span className="addBtn"
                style={{margin:'5px',
                        width:'auto',
                        background:'#3bc1ed',
                        borderRadius:'10px',
                        fontSize:'14px'}}>
                        Add To Order</span>                   
        </div>
    );
  }
}

export default Menu;
