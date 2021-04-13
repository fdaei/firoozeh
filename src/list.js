import App from './App';
import { BrowserRouter as Router, Switch, Route , Link } from "react-router-dom";
import React from 'react'
let name = localStorage.getItem('MyList');
function list(props) {
    return (
        <Router>
        <div> 
        <h1>The List is :</h1>
        <br/>
        {name} 
        <br/>
        <button>exit</button>  
        <button>exit and clear</button>
        </div>
        </Router>
    )
}

export default list
