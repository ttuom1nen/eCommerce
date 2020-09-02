import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { User } from "./models";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null as User | null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});
        userRef?.onSnapshot((snapShot) => {
          console.log(snapShot.data());
          setCurrentUser({ id: snapShot.id, ...(snapShot.data() as User) });
        });
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SigninPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
