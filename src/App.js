import './App.css';
import Imgadd from './ax.png';
import Sign from './singup';
function App() {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-sm-5'>
        <Sign />
        </div>
        <div className='col-sm-7'>
          <img  className='img-fluid w-100' src={Imgadd} className="img-fluid w-100"/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
