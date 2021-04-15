import {withRouter} from 'react-router-dom';
import { useParams ,useHistory } from "react-router";
import React, { useState,useEffect } from "react";
// let test = localStorage.getItem('MyList');
function List(props) {
  const history = useHistory()
    const [Name, setName] = useState()
  const { name, family } = useParams()
    useEffect(() => {
      setName(localStorage.getItem("MyList"))
    }, [])
  return (
    <div>
      <h1>The List is :</h1>
      <br />
      {name}
      <br />
      {family}
      <br />
      {Name}
      <button onClick={() => {
        history.goBack();
      }}>click </button>
      <button onClick={() => {
        history.goBack();
        localStorage.clear();
      }}>click and clear</button>
    </div>
  )
}

export default withRouter(List);
