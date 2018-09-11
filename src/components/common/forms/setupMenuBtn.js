import React from 'react';

const SetupMenuBtn = ({onSetupMenu}) => {
    return(
        <input type="submit"
            value="Manage Menus"
            className="btn btn-primary btn-sm"
            onClick={onSetupMenu}
            />
    );
}

export default SetupMenuBtn;
