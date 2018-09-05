import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { userActions } from '../../actions/user.actions';
import { alertActions } from '../../actions/alert.actions';
import { history } from '../../helpers/history';

class CustomerSignUp extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            user: {
                first_name: '',
                last_name: '',
                user_name: '',
                email: '',
                password: '',
                is_caterer: false
            },
            submitted: false
        };
        const { dispatch } = this.props;
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }
 
    handleSubmit(event) {
        event.preventDefault();
 
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        
        if (user.first_name && user.last_name && user.user_name && user.email && user.password) {
            dispatch(userActions.register(user));
        }
        else{
            alert(JSON.stringify(user))
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
        <form id="customer" className="formContent" onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="col-md-12"> 
                    <h1>Customer Sign Up</h1>
                        <small>Please fill in this form to create an account</small>
                    </div>
                    <hr/>
                    <p className="col-sm-6 col-xs-12"> 
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" placeholder="Enter First Name" name="first_name" value ={user.first_name} onChange={this.handleChange} required/>
                        {submitted && !user.first_name &&
                            <div className="help-block">First name is required</div>
                        }
                    </p>
                    <p className="col-sm-6 col-xs-12"> 
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" placeholder="Enter Last Name" name="last_name" value ={user.last_name} onChange={this.handleChange} required/>
                        {submitted && !user.last_name &&
                            <div className="help-block">Last name is required</div>
                        }
                    </p>  
                    <p className="col-sm-6 col-xs-12"> 
                        <label htmlFor="user_name">Username</label>
                        <input type="text" placeholder="Enter Username" name="user_name" value ={user.user_name} onChange={this.handleChange} required/>
                        {submitted && !user.user_name &&
                            <div className="help-block">Username is required</div>
                        }
                    </p> 
                    <p className="col-sm-6 col-xs-12"> 
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Enter Email" name="email"  value ={user.email} onChange={this.handleChange} required/>
                        {submitted && !user.email &&
                            <div className="help-block">Email is required</div>
                        }
                    </p> 
                    <p className="col-sm-6 col-xs-12">     
                        <label htmlFor="psw">Password</label>
                        <input type="password" placeholder="Enter Password" name="password"  value ={user.password} onChange={this.handleChange} required/>
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
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    const { registering } = state.registration;
    return {
        alert,
        registering
    };
}
 
const connectedSignUpPage = connect(mapStateToProps)(CustomerSignUp);
export { connectedSignUpPage as CustomerSignUp };
