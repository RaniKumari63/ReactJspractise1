
import { Component } from 'react';
import './App.css';

import Greet from './Components/Greet';
import Greet1 from './Components/Greet1';
import Hello from './Components/Hello';
import Hello1 from './Components/Hello1';
import Hook from './Components/Hooks';
import Message from './Components/Message';
import Counter from './Components/Counter';
import Greet2 from './Components/Greet2';
import Props from './Components/Props';
import PropsClass from './Components/PropsClass';
import StateClass from './Components/StateClass';
import Destructuringrops from './Components/Destructuringrops';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import StudentList from './Components/StudentList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import '../src/Components/AppStyles.css'
import styles from '../src/Components/AppStyles.module.css'

class App extends Component {forceUpdate
 render(){ return (


    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Sucess</h1>
      <Stylesheet primary={true}/>
      <Inline/>
      <StudentList/>
     {/*  <NameList/>
      <UserGreeting/>
      <ParentComponent/>
      <EventBind/> */}
      {/* <Hello1/>
      
      <Hello/>
     <Hook/> */}
    {/*  <Counter/>
     <Message/>
     <Props id="emp1" name="aaa"><h1>ffffffffffffffff</h1></Props>
     <PropsClass age="12" address="hyd"><h1>ffffffffffffffff</h1></PropsClass><br></br><br></br>
<StateClass/>
<Destructuringrops no="12" email="rani@gmail.com"/>

<dDe no="13" email="kumari@gmail"/>
     <Greet2 namevalue="Bruce" heroname="Batname"></Greet2>
     <Greet namevalue="Bruce" heroname="Batname">
      <p>this is children props</p></Greet>
     <Greet namevalue="Clark" heroname="supername">
     <input type='text' name="name" value="rani"/>
     </Greet>
     <Greet namevalue="Diana" heroname="dogman">
     <button>action</button>
     </Greet>
     <Greet1 namevalue="Bruce" heroname="Batname">
      <p>this is children props</p></Greet1>
     <Greet1 namevalue="Clark" heroname="supername">
     <input type='text' name="name" value="rani"/>
     </Greet1>
     <Greet1 namevalue="Diana" heroname="dogman">
     <button>action</button>
     </Greet1> */}
    </div>
  );
}
}
export default App;
