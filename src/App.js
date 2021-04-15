import "./Scss/App.scss";
import React, { useState,useEffect } from "react";
import Imgadd from "./Images/ax.png";
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
          <div className="col-sm-7">
            <img className="img-fluid w-100" src={Imgadd} className="img-fluid w-100" />
          </div>
          <div className="col-sm-5">
            <Switch>
              <Route exact path="/" component={Sign} />
              <ProtectedRoute path="/List/:name/:family" component={List}/>
              <Route path="*"><Redirect to="/"/></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
