import React, { Component } from "react";

const orders = [
    {
        id: "1",
        name: "Rice and Chicken",
        price: "13.5"
    },
    {
        id: "2",
        name: "Rice and Fish",
        price: "12.5"
    },
    {
        id: "3",
        name: "Posho and Beans",
        price: "14.5"
    },
    {
        id: "4",
        name: "Chips Masala",
        price: "10.5"
    },
    {
        id: "5",
        name: "Potatoes and Meat",
        price: "12.5"
    },
    {
        id: "6",
        name: "Fries and Beef",
        price: "15.5"
    },
]

function OrderItem({name}){
    return(
        <li>
            {{name}}
        </li>
    );
}

class Orders extends Component {
  render() {
    return (
        <div id="orders">
            <div className="header">
                <h2 style="margin:5px">Orders</h2>                     
            </div>
                
            <ul id="menuList">
                {orders.map((name) => <OrderItem name={name} key={name} />)}
            </ul>  <span class="addBtn" style="margin: 5px;width: auto;background: #f44336;border-radius:10px; font-size: 14px;">Delete</span>   
            <span class="addBtn" style="margin: 5px;width: auto;background: #4CAF50;border-radius:10px; font-size: 14px;">Mark as Complete</span>                     
        </div>
    );
  }
}

export default Order;
