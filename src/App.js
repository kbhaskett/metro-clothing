import React, { Component } from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage";
import ShopPage from "./pages/shopPage";
import CheckoutPage from './pages/checkoutPage'
import AuthPage from "./pages/authPage";
import Header from "./components/header";
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user-selector'

import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

class App extends Component {

  authUserHook = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.authUserHook = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    console.log(this.props);
  }

  componentWillUnmount() {
    this.authUserHook();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/auth" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<AuthPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
