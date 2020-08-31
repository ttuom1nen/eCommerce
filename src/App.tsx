import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import Header from "./components/Header/Header";
import { auth } from "./firebase/firebase.utils";

import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null as firebase.User | null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

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
