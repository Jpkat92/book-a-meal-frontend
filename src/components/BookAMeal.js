import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux';
import { history } from '../helpers/history';
import { alertActions } from '../actions/alert.actions';
import { userActions } from '../actions/user.actions';
import { SecureRoute } from './SecureRoute';
import Header from './common/header';
import { HomePage } from './home/HomePage';
import { SignUpPage } from './signUp/SignUpPage';
import { SignInPage } from './signIn/SignInPage';
import CatererDashboardPage from './catererDashboard/CatererDashboardPage';
import ManageMealPage from './meals/ManageMealPage'
import ManageMenuPage from './menu/ManageMenuPage'
import '../css/bootstrap.min.css';
import '../BookAMeal.css';

class BookAMeal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alert: this.props.alert
    }
    
    history.listen((location, action) => {
          this.props.clear();
      });
  }

  componentWillReceiveProps(nextProps){
    this.setState({
        alert: nextProps.alert
    })
}

  render() {
    debugger;
    const { userStatus, user, alert } = this.props;
    return (
      <Router history={history}>
        <div className="container-fluid">
            <Header authStatus={userStatus} profile={user}/>
            {this.state.alert.message &&
                <div className={`alert ${alert.type} fade in`}>
                  <a href="" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                  {alert.message}
                </div>
            }
            <Switch>
                <SecureRoute exact path="/" component={HomePage}/>
                <Route path="/signin" component={SignInPage}/>
                <Route path="/signup" component={SignUpPage}/>
                <SecureRoute path="/dashboard" component={CatererDashboardPage}/>
                <SecureRoute path="/menu/" component={ManageMenuPage} />
                <SecureRoute path="/meals/:id" component={ManageMealPage} />
                <SecureRoute path="/meals/" component={ManageMealPage} />
            </Switch>
          </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  const { user } = state.authentication;
  let userStatus = 0;
  if(user && user.isAdmin){
    userStatus = 1
  }else if (user && !user.isAdmin) {
    userStatus = 2
  }
  debugger;
  return {
      alert,
      user,
      userStatus
  };
}

const mapDispatchToProps = {
  ...userActions,
  ...alertActions
};

const connectedBookAMeal = connect(mapStateToProps, mapDispatchToProps)(BookAMeal);
export {connectedBookAMeal as BookAMeal};
