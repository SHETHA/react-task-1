import './App.css';
import vector from './Vector.svg';
function App() {
  return (
    <div className="App">
      <div className="heading">
        My Tasks
      </div>
      <div className="inputbar">
        <div className="inputText">
          <input type="text" placeholder="Add new task"/>
        </div>
        <div>
          <button> Add </button>
        </div>
      </div>
      <div className="todo">
        <div className="list">
          <div>
             <p>Read work emails</p>
          </div>
          <div>
             <img src={vector}/>
          </div>
        </div>
        <div className="list">
          <div className='strike'>
             <p >Workout</p>
          </div>
          <div className='strike'>
             <img  src={vector}/>
          </div>
        </div>
        <div className="list">
          <div>
             <p>Water indoor plants</p>
          </div>
          <div>
             <img src={vector}/>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
