import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { userActions } from '../actions/user.actions';

class CustomerSignIn extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            key: 1,
            email: '',
            password: '',
            submitted: false
          };
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
        const { email, password, submitted } = this.state;
      return (
        <form id="customer" className="formContent" onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="col-sm-12"> 
                <h1>Customer Sign in</h1> 
                    <p><small>Fill your credentials to proceed</small></p>
                    <hr/>
                    <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                        <label  className="col-sm-6 col-xs-12" htmlFor="email"> Email </label>
                        <input className="col-sm-6 col-xs-12" name="email" value ={email} required="required" type="text" onChange={this.handleChange} placeholder="your email..."/>
                        {submitted && !email &&
                        <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label className="col-sm-6 col-xs-12" htmlFor="password"> Password </label>
                        <input className="col-sm-6 col-xs-12" name="password" value ={password} required="required" type="password" onChange={this.handleChange} placeholder="..." /> 
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <input  className="col-sm-6" type="checkbox" name="keeploggedin" value="keeploggedin" /> 
                        <label  className="col-sm-6" htmlFor="keeploggedin">Keep me logged in</label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="indexbtn">Sign In</button>
                
                        <p className="col-sm-12 change_link">
                            Not a user yet ?
                            <Link to="/signup"> Sign up</Link>
                        </p>
                    </div>
                </div>    
            </div>
        </form>
        );
    }
}

function mapStateToProps(state) {
    const { signingIn } = state.authentication;
    return {
        signingIn
    };
}
 
const connectedSignInPage = connect(mapStateToProps)(CustomerSignIn);
export { connectedSignInPage as CustomerSignIn };
