import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { userActions } from '../../actions/user.actions';
import TextFormInput from '../common/forms/textFormInput';

class SignInPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            email: '',
            password: '',
            submitted: false
        };
        this.props.dispatch(userActions.signout());

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.signin(email, password));
        }
    }
      
    render() {
        const { signingIn } = this.props;
        const { email, password, submitted } = this.state;
        return (
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <div className="formBox">
                            <form id="customer" className="formContent" onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-12"> 
                                    <h1>Sign in</h1> 
                                        <p><small>Fill your credentials to proceed</small></p>
                                        <hr/>
                                        <TextFormInput name="email" value={email} submitStatus={submitted} type="text" handleOnChange={this.handleChange}/> 
                                        <TextFormInput name="password" value={password} submitStatus={submitted} type="password" handleOnChange={this.handleChange}/> 
                                        <div className="form-group">
                                            <input  className="col-sm-6" type="checkbox" name="keeploggedin" value="keeploggedin" /> 
                                            <label  className="col-sm-6" htmlFor="keeploggedin">Keep me logged in</label>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="indexbtn">Sign In</button>
                                            {signingIn &&
                                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt=""/>
                                            }
                                            <p className="col-sm-12 change_link">
                                                Are you a first time user ?
                                                <Link to="/signup"> Sign up here</Link>
                                            </p>
                                        </div>
                                    </div>    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }
  function mapStateToProps(state) {
    const { signingIn } = state.authentication;
    return {
        signingIn
    };
}
 
const connectedSignInPage = connect(mapStateToProps)(SignInPage);
export { connectedSignInPage as SignInPage };
