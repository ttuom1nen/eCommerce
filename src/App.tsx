import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { User } from "./models";
import { setCurrentUser } from "./redux/user/user.actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});
        userRef?.onSnapshot((snapShot) => {
          console.log(snapShot.data());
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
        <Route path="/signin" component={SigninPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
