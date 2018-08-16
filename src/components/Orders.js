import React from "react";

function OrderItem({name}){
    return(
        <li>
            {{name}}
        </li>
    );
}

function Orders ({orders}){
    return (
        <div id="orders">
            <div className="header">
                <h2 style={{margin:'5px'}}>Orders</h2>                     
            </div>
                
            <ul id="menuList">
                
            </ul>  <span className="addBtn" style={{margin:'5px',
                        width:'auto',
                        background:'#3bc1ed',
                        borderRadius:'10px',
                        fontSize:'14px'}}>Delete</span>   
            <span className="addBtn" style={{margin:'5px',
                        width:'auto',
                        background:'#3bc1ed',
                        borderRadius:'10px',
                        fontSize:'14px'}}>Mark as Complete</span>                     
        </div>
    );
}

export default Orders;
