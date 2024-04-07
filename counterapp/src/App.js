
import './App.css';
import Counter from './Component/Counter';
import FunCounter1 from './Component/FunCounter1';
import FunCounter12 from './Component/FunCounter12';
import FunctionClass from './Component/FunctionClass';
import ParentComponent from './Component/ParentComponent';

function App() {
  return (
    <div className="App">
   <Counter/>
   <FunCounter1/>
   <FunCounter12/>
   <FunctionClass/>
   <ParentComponent/>
    </div>
  );
}

export default App;
