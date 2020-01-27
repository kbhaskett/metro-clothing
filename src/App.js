import React, { Component } from "react";
import {connect} from 'react-redux';
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage";
import ShopPage from "./pages/shopPage";
import AuthPage from "./pages/authPage";
import Header from "./components/header";
import {setCurrentUser} from './redux/user.actions';

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
          <Route path="/auth" component={AuthPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps) (App);
