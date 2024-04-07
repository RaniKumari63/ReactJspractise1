
import './App.css';
import Course from './Component/Course';
import Users from './Component/Users';

function App() {
  return (
    <div className="App">
      <h1>Functional Component</h1>
      <Users name='Chandra' age='39'/>
      <hr></hr>
      <h1>Class Component</h1>
      <hr/>
      <Course cname='Angular'/>
    </div>
  );
}

export default App;
