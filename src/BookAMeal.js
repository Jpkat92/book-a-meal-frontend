import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux';
import { history } from './helpers/history';
import { alertActions } from './actions/alert.actions';
import { userActions } from './actions/user.actions';
import { SecureRoute } from './components/SecureRoute';
import Header from './components/common/header';
import { HomePage } from './components/home/HomePage';
import SignUpPage from './components/signUp/SignUpPage';
import { SignInPage } from './components/signIn/SignInPage';
import CatererDashboardPage from './components/catererDashboard/CatererDashboardPage';
import ManageMealPage from './components/meals/ManageMealPage'
import ManageMenuPage from './components/menu/ManageMenuPage'
import ManageOrderPage from './components/orders/ManageOrderPage'
import './css/bootstrap.min.css';
import './BookAMeal.css';

class BookAMeal extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
          this.props.clear();
      });
  }

  render() {
    const { alert } = this.props;
    const { userStatus } = this.props;
    const { user } = this.props;
    debugger;
    return (
      <Router history={history}>
        <div className="container-fluid">
            <Header authStatus={userStatus} profile={user}/>
            {alert.message &&
                <div className={`alert ${alert.type} fade in`}>
                  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
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
                <SecureRoute path="/orders/:id" component={ManageOrderPage} />
                <SecureRoute path="/orders/" component={ManageOrderPage} />
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
