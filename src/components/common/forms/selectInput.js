import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  let sortedOptions;
  if (isNaN(value)){
    sortedOptions = options
  }
  else{
    sortedOptions = options.filter(optionItem => optionItem.id !== value)
  }
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
         <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control">
          <option value="">{defaultOption}</option>
          {sortedOptions.map((option) => {
            return <option key={option.id} value={option.id}>{option.name}</option>;
          })
          }
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
