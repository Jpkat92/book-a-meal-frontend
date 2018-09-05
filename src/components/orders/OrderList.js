import React from "react";
import PropTypes from 'prop-types'
import OrderListRow from './OrderListRow'
import DeleteOrderBtn from '../common/deleteOrderBtn'

const OrderList = ({orders, onToggleOrder, onClickButton, changingOrder}) => {  
    return (
        <div id="orders" className="col-md-4">
             <div className="header">
                <h2 style={{'margin':'5px'}}>Orders</h2>                 
            </div>
            <br/>
            <DeleteOrderBtn deleting={changingOrder} onClickDelete={onClickButton}/>
            <hr/>
            <table className="table">
                <thead>
                <tr>
                <th>-</th>
                <th>Meal</th>
                <th>Cost</th>
                <th>Customer</th>
                </tr>
                </thead>
                <tbody>
                {orders &&
                    orders.map(order =>
                    <OrderListRow 
                        key={order.id}
                        order={order}
                        toggleCheckBoxChange={onToggleOrder}/>
                    )
                }
                </tbody>
            </table>
        </div>
    );
  };
  
  OrderList.propTypes = {  
    orders: PropTypes.array.isRequired
  };
  
  export default OrderList;  
