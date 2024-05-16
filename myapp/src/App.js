
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Signup from './components/Signup';
import Statebasics from './components/Statebasics';
import Counter from './components/Counter';
import Use from './components/Use';
import Viewdata from './components/Viewdata';

function App() {
  return (
    <div className="App">
     
      
      
      <Navbar/>
      <Routes>
      <Route path='/reg' element={<Register/>}/>
      <Route path='/u' element={<Statebasics/>}/>
      <Route path='/c' element={<Counter/>}/>
      <Route path='/i' element={<Use/>}/>
      <Route path='/view' element={<Viewdata/>}/>
  
      </Routes>
      
    </div>
  );
}

export default App;
