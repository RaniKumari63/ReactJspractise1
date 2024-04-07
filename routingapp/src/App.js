
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Service from './Components/Service';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div className='container' style={{marginTop:20}}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/aboutus">AboutUs</Link></li>
      <li><Link to="/contactus">ContactUs</Link></li>
    </ul>
    </div>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/services" element={<Service/>}/>
<Route path="/aboutus" element={<AboutUs/>}/>
<Route path="/contactus" element={<ContactUs/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
