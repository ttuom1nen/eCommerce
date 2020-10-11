import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

import Header from "./components/Header/Header";

import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { User, StoreState } from "./models";
import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const currentUser: User | null = useSelector(
    (state: StoreState) => state.user.currentUser
  );

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});
        userRef?.onSnapshot((snapShot) => {
          // console.log(snapShot.data());
          dispatch(
            setCurrentUser({ id: snapShot.id, ...(snapShot.data() as User) })
          );
        });
      } else {
        dispatch(setCurrentUser(null));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
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
