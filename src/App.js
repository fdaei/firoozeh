import "./App.scss"
import Imgadd from "./ax.png"
import Sign from "./singup"
import List from "./list"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
function App() {
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
              <Route path="/List/:name/:family" component={List} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
