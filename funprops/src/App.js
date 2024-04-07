
import './App.css';
import Course from './Component/Course';
import User from './Component/User';

function App() {
  return (
    <div className="App">
      <User name="Rani" age="35"/>
      <Course cname="React" time="3"/>
    </div>
  )
}

export default App;
