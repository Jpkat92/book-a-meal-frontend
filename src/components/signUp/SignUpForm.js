import React from 'react';
import { Link } from "react-router-dom";

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
                    </div>
                    <hr/>
                    <p className="col-sm-6 col-xs-12"> 
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" placeholder="Enter First Name" name="firstName" value ={user.firstName} onChange={onInputChange} required/>
                        {submitted && !user.firstName &&
                            <div className="help-block">First name is required</div>
                        }
                    </p>
                    <p className="col-sm-6 col-xs-12"> 
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder="Enter Last Name" name="lastName" value ={user.lastName} onChange={onInputChange} required/>
                        {submitted && !user.lastName &&
                            <div className="help-block">Last name is required</div>
                        }
                    </p>  
                    <p className="col-sm-6 col-xs-12"> 
                        <label htmlFor="userName">Username</label>
                        <input type="text" placeholder="Enter Username" name="userName" value ={user.userName} onChange={onInputChange} required/>
                        {submitted && !user.userName &&
                            <div className="help-block">Username is required</div>
                        }
                    </p> 
                    <p className="col-sm-6 col-xs-12"> 
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Enter Email" name="email"  value ={user.email} onChange={onInputChange} required/>
                        {submitted && !user.email &&
                            <div className="help-block">Email is required</div>
                        }
                    </p> 
                    <p className="col-sm-6 col-xs-12">     
                        <label htmlFor="psw">Password</label>
                        <input type="password" placeholder="Enter Password" name="password"  value ={user.password} onChange={onInputChange} required/>
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </p>
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
                            <Link to="/signin">Sign in</Link>
                        </p>
                    </div>
                </form>
        );
    };

export default SignUpForm;
