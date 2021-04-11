import './App.scss';
import Imgadd from './ax.png';
import Sign from './singup';
import List from './List';
import { BrowserRouter as Router, Switch, Route , Link } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-sm-5'>
        <Sign />
        </div>
        <div className='col-sm-7'>
          <img  className='img-fluid w-100' src={Imgadd} className="img-fluid w-100"/>
          <br/>
          <br/>
          <button><Link to="/List">Show List</Link></button>
          <Switch>
          <Route path="/List" component={List}>
          </Route>
         </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
