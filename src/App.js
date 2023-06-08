import './App.css';
import logo from './img/to-do.png';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img 
          src={logo}
          className='logo' 
        />
      </div>
      <div className='to-do-list'>
          <h1>Mis tareas</h1>
          <ToDoList />
      </div>
    </div>
  );
}

export default App;
