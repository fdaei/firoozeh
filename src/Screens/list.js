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
        history.push("/");
      }}>go to login</button>
      <button onClick={() => {
        localStorage.removeItem("Auth");
        history.push("/");
      }}>logout</button>
    </div>
  )
}

export default withRouter(List);
