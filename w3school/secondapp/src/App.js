import{BrowserRouter} from react-router-dom
import './App.css';
import Blogs from './Component/Blogs';
import Garage from './Component/Garage';
import Home from './Component/Home';
import Layout from './Component/Layout';
import MyForm from './Component/MyForm';
import NoPage from './Component/NoPage';

function App() {
  return (
    <div className="App">
  {/*    <MyForm/> */}
<BrowserRouter>
<Routes>
<Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path='blogs' element={<Blogs/>}/>
  <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />

</Route>


</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
