import React from 'react';

const DeleteOrderBtn = ({onClickDelete, deleting}) => {
    return(
        <input type="submit"
            disabled={deleting}
            value={deleting ? 'Deleting order...' : 'Delete Order(s)'}
            onClick={onClickDelete}
            className="btn btn-danger btn-sm"
            />
    );
}

export default DeleteOrderBtn;
