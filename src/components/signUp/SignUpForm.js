import React from 'react';
import { Link } from "react-router-dom";
import TextFormInput from '../common/forms/textFormInput'

const SignUpForm = ({user, adminRole, submitted, registering, handleClick, onInputChange}) => {
        debugger;
        return (
        <form className="formContent" onSubmit={evt => handleClick(evt, adminRole)}>
            <div className="row">
                <div className="col-md-12"> 
                    <h1>
                    {adminRole ? (<span>Caterer</span>) : (<span>Customer</span>)} Sign Up
                    </h1>
                    <small>Please fill in this form to create an account</small>
                    <hr/>
                    <TextFormInput name="firstName" value={user.firstName} submitStatus={submitted} type="text" handleOnChange={onInputChange}/>
                    <TextFormInput name="lastName" value={user.lastName} submitStatus={submitted} type="text" handleOnChange={onInputChange}/> 
                    <TextFormInput name="userName" value={user.userName} submitStatus={submitted} type="text" handleOnChange={onInputChange}/> 
                    <TextFormInput name="email" value={user.email} submitStatus={submitted} type="text" handleOnChange={onInputChange}/> 
                    <TextFormInput name="password" value={user.password} submitStatus={submitted} type="password" handleOnChange={onInputChange}/> 
                 
                    <p className="col-sm-12">      
                        <label>
                        <input type="checkbox" name="remember" style={{'marginBottom':'15px'}}/> Remember me
                        </label>
                    </p>                      
                    <div className="col-sm-12 clearfix">
                        <button type="submit" className="signupbtn">Sign Up</button>
                        {registering && 
                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="  alt=" "/>
                    }
                    </div>

                    <p className="col-sm-12 change_link">
                        Already a signed up?
                        <Link to="/signin"> Sign in</Link>
                    </p>
                </div>
            </div>
        </form>
        );
    };

export default SignUpForm;
