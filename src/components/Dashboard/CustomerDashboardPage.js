import React, { Component } from 'react';

// const orders = [
//     {
//         id: "1",
//         name: "Rice and Chicken",
//         price: "13.5"
//     },
//     {
//         id: "2",
//         name: "Rice and Fish",
//         price: "12.5"
//     },
//     {
//         id: "3",
//         name: "Posho and Beans",
//         price: "14.5"
//     },
//     {
//         id: "4",
//         name: "Chips Masala",
//         price: "10.5"
//     },
//     {
//         id: "5",
//         name: "Potatoes and Meat",
//         price: "12.5"
//     },
//     {
//         id: "6",
//         name: "Fries and Beef",
//         price: "15.5"
//     },
// ]

class CustomerDashBoardPage extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="mainContent">
                                <li><input type="checkbox" name="option1" value=""/>Rice and Chicken<span class="close">×</span></li>
                                <li><input type="checkbox" name="option2" value=""/>Rice and Fish<span class="close">×</span></li>
                                <li><input type="checkbox" name="option3" value=""/>Posho and Beans<span class="close">×</span></li>
                                <li><input type="checkbox" name="option4" value=""/>Chips Masala<span class="close">×</span></li>
                                <li><input type="checkbox" name="option5" value=""/>Potatoes and Meat<span class="close">×</span></li>
                                <li><input type="checkbox" name="option6" value=""/>Fries and Beef<span class="close">×</span></li>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
  }

export default CustomerDashBoardPage;
