import React, { Component } from 'react';
import { Tabs , Tab } from 'react-bootstrap';
import {connect} from 'react-redux';
import { alertActions } from '../../actions/alert.actions';
import { userActions } from '../../actions/user.actions';
import SignUpForm from './SignUpForm'

class SignUpPage extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
                password: '',
                isCaterer: false,
                key: 1
            },
            isSubmitted: false
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleSelect(key) {
        this.setState({ key });
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
 
    handleSubmit(event, isCaterer) {
        event.preventDefault();
        this.setState({ isSubmitted: true });

        let { user } = this.state;
        user.isCaterer = isCaterer;
        this.setState({user})

        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.userName && user.email && user.password) {
            dispatch(userActions.register(user));
        }
        else{
            dispatch(alertActions.error("All fields are necessary"));
        }
    }

    render() {
        const { isRegistering  } = this.props;
        const { user, isSubmitted } = this.state;
        debugger;
        return (
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <div className="formBox"> 
                            <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="sign-up-tabs">
                                <Tab eventKey={1} title="Customer">
                                    <SignUpForm user={user} adminRole={false} registering={isRegistering}
                                        submitted={isSubmitted} onInputChange={this.handleChange}
                                        handleClick={this.handleSubmit}/>
                                </Tab>
                                <Tab eventKey={2} title="Caterer">
                                    <SignUpForm user={user} adminRole={true} registering={isRegistering}
                                        submitted={isSubmitted} onInputChange={this.handleChange}
                                        handleClick={this.handleSubmit}/>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        isRegistering : registering
    };
}
 
const connectedSignUpPage = connect(mapStateToProps)(SignUpPage);
export { connectedSignUpPage as SignUpPage };
