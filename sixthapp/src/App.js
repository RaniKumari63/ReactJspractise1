
import './App.css';
import FirstComponent from './FirstComponent';
import HelloWorld from './HelloWorld';
import HelloWorld1 from './HelloWorld1';
import MyComponent from './MyComponent';

import ThirdComponent from './ThirdComponent';
import UserInputForm from './UserInputForm';

function App() {
  return (
 

  <div id="main">
    <UserInputForm name="aaa" />
    <FirstComponent content={"rani"}/>
   
    <ThirdComponent content={"dddd"}/>
   <HelloWorld names="rani kumari" age="343"/>
   <HelloWorld1 name="66666666666666"/>
   <MyComponent name="lllllllllll"/>
   </div>
  );
}

export default App;
