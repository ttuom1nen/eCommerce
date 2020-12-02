import React, { useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import Spinner from "./components/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import { Switch, Route, Redirect } from "react-router-dom";
import { User, StoreState } from "./models";
import { checkUserSession } from "./redux/user/user.actions";

import { GlobalStyle } from "./global.styles";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage/ShopPage"));
const SigninPage = lazy(() => import("./pages/SigninPage/SigninPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage/CheckoutPage"));

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
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/shop" component={ShopPage}></Route>
            <Route path="/checkout" component={CheckoutPage}></Route>
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SigninPage />
              }
            ></Route>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
