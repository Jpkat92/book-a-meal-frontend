import React from 'react';
import {PropTypes} from 'prop-types'

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
