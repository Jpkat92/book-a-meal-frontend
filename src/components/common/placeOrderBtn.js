import React from 'react';

const PlaceOrderBtn = ({onClickOrder}) => {

    return(
        <input type="submit"
            value="Place Order"
            className="btn btn-primary btn-sm"
            onClick={onClickOrder}
            />
    );
}

export default PlaceOrderBtn;
