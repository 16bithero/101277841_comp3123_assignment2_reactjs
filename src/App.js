import './App.css';
import AddEmployee from './components/AddEmployee';
import EmpView from './components/EmpView';
import Update from './components/Update';
import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <AddEmployee/>
      <EmpView/>
      <Update/> */}
            <BrowserRouter>
      <nav>
          <ul>
            <li><NavLink to='/add'>Add</NavLink></li>
            <li><NavLink to='/view'>View</NavLink></li>
            <li><NavLink to='/update'>Update</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/add' element={<AddEmployee/>}/>
          <Route path='/view' element={<EmpView/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
