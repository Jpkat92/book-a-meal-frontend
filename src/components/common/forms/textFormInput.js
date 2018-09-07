import React from 'react'

const TextFormInput = ({name, value, submitStatus, type, handleOnChange}) => {
    const displayName = name != 'userName' ? name.toLowerCase().replace('n',' n'): name.toLowerCase();
    const label = displayName.charAt(0).toUpperCase() + displayName.substr(1);
    const placeholder = `Enter ${displayName} here...`
    return (
        <div className={'form-group' + ({submitStatus} && !{value} ? ' has-error' : '')}>
            <label  className="col-md-6 col-xs-12" htmlFor={name}> {label} </label>
            <input className="col-md-6 col-xs-12" name={name} value ={value} required="required" type={type} onChange={handleOnChange} placeholder={placeholder}/>
            {{submitStatus} && !{value} &&
            <div className="help-block">{displayName} is required</div>
            }
        </div>
    )

};

export default TextFormInput;
