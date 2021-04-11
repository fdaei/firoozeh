import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
// let name = localStorage.getItem('MyList');
function List(props) {
//   const [name, setName] = useState()
  const {name, family} = useParams()

//   useEffect(() => {
//     setName(localStorage.getItem("MyList"))
//   }, [])

  return (
    <div>
      <h1>The List is :</h1>
      <br />
      <br />
      {name}
      <br />
      {family}
    </div>
  )
}

export default List
