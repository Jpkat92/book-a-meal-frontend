import React from "react";
import PropTypes from 'prop-types'
import OrderListRow from './OrderListRow'
import DeleteOrderBtn from '../common/forms/deleteOrderBtn'

const OrderList = ({isAdmin, orders, onToggleOrder, onClickButton, changingOrder}) => {  
    return (
        <div id="orders" className="col-md-4">
             <div className="header">
                <h2 style={{'margin':'5px'}}>Orders</h2>                 
            </div>
            <DeleteOrderBtn deleting={changingOrder} onClickDelete={onClickButton}/>
            <hr/>
            <table className="table">
                <thead>
                <tr>
                <th>-</th>
                <th>Meal</th>
                <th>Cost</th>
                {isAdmin ? 
                    (<th>Customer</th>):
                    (<th></th>)
                }
                </tr>
                </thead>
                <tbody>
                {orders &&
                    orders.map(order =>
                    <OrderListRow 
                        key={order.id}
                        isAdminView={isAdmin}
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
    orders: PropTypes.array.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    onToggleOrder: PropTypes.func.isRequired,
    onClickButton: PropTypes.func.isRequired
  };
  
  export default OrderList;  
