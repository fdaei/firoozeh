import React from 'react'
let name = localStorage.getItem('MyList');
function list(props) {
    return (
        <div> 
        <h1>The List is :</h1>
        <br/>
        <br/>
        {name}    
        </div>
    )
}

export default list
