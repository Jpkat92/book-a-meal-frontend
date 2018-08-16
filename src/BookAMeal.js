import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux';
import { history } from './helpers/history';
import { alertActions } from './actions/alert.actions';
import { SecureRoute } from './components/SecureRoute';
import HomePage from './components/Home/HomePage'
import SignUpPage from './components/SignUp/SignUpPage'
import SignInPage from './components/SignIn/SignInPage'
import './css/bootstrap.min.css';
import './BookAMeal.css';
import CustomerDashboardPage from './components/Dashboard/CustomerDashboardPage';

class BookAMeal extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        dispatch(alertActions.clear());
    });
}
  render() {
    const { alert } = this.props;
    return (
      <Router history={history}>
        <div className="container-fluid">
            <div id="nav"> 
                <ul>
                    <li style={{float:'left'}}><a><b>Book-A-Meal</b></a></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/signin" component={SignInPage}/>
                <Route path="/signup" component={SignUpPage}/>
                <SecureRoute path="/dashboard" component={CustomerDashboardPage}/>
            </Switch>
          </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  const { signingIn } = state.authentication;
  return {
      alert,
      signingIn
  };
}

const connectedBookAMeal = connect(mapStateToProps)(BookAMeal);
export {connectedBookAMeal as BookAMeal};
