import React from 'react';
import {PropTypes} from 'prop-types'

const CheckBoxInput = ({id, name, isChecked, onCheckboxChange, error}) => {
  return (
      <div className="form-group">
        <input
          type="checkbox"
          name={name}
          className="form-control"
          defaultChecked={isChecked}
          onClick={evt => onCheckboxChange(evt,id)}/>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
  );
};

CheckBoxInput.propTypes = {
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default CheckBoxInput;
