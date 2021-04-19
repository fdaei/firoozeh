import "./Scss/App.scss";
import React_Image from './Images/1 Xt3l-_54wuxdsHpiolGP3g.jpeg';
import React, { useState,useEffect } from "react";
import Error2 from "./Screens/ERROR";
import Sign from "./Screens/singup"
import List from "./Screens/list"
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import ProtectedRoute from './Components/ProtectedRoute';
function App() {
  const Bool=localStorage.getItem("MyBoolean");
  useEffect(()=>{
    localStorage.clear();
    localStorage.setItem("MyBoolean", false);
  },[])
  return (
    <Router>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-12">
            <Switch>
              <Route exact path="/" component={Sign} />
              <ProtectedRoute path="/List/:name/:family" component={List}/>
              <Route exact path="/Error" component={Error2} />
              <Route path="*"><Redirect to="/Error"/></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
