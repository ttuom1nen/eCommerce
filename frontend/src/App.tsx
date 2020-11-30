import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

import Header from "./components/Header/Header";

import { Switch, Route, Redirect } from "react-router-dom";
import { User, StoreState } from "./models";
import { checkUserSession } from "./redux/user/user.actions";

import { GlobalStyle } from "./global.styles";

function App() {
  const dispatch = useDispatch();

  const currentUser: User | null = useSelector(
    (state: StoreState) => state.user.currentUser
  );

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/checkout" component={CheckoutPage}></Route>
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SigninPage />)}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
