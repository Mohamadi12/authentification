import './App.css';
import HomePage from './component/HomePage';
import Login from './component/Login';
import PrivateRoute from './component/PrivateRoute';
import Register from './component/Register';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
         <Route path='/' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/home' element={<HomePage/>}/>
         <Route path='/private' element={<PrivateRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
