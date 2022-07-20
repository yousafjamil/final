import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Addblog from './components/Addblog';
import Editblog from './components/Editblog';
import Allblogs from './components/Allblogs';
import Singleblog from './components/Singleblog';
import Searchblogs from './components/Searchblogs';
import Signup from './components/Signup';
import Login from './components/Login';



function App() {
 
  return ( 
    <div className="App">
    

     <Navbar  />
     
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact
        
        path='/addblog' element={<Addblog />} />
        <Route exact path='/editblog/:id' element={<Editblog />} />
        <Route exact path='/allblog' element={ <Allblogs />} />
        <Route exact path='/singleblog/:id' element={ <Singleblog  />} />
        <Route exact path='/search' element={ <Searchblogs />} />
        <Route exact path='/' element={ <Signup />} />
        <Route exact path='/login' element={ <Login />} />



  
      </Routes>

    </div>
  );
}

export default App;
