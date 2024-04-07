
import './App.css';
import Bus from './Component/Bus';
import Car from './Component/Car';
import Football from './Component/Football';
import Garage from './Component/Garage';
import Goal from './Component/Goal';
import Mapex from './Component/Mapex';
import Table from './Component/Table';

function App() {
  return (
    <div className="App">
      <Mapex/>
      <Table/>
     <Garage/>
     <Bus/>
    <Football/>
    <Goal isGoal={true}/>
    </div>
  );
}

export default App;
