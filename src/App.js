import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmpView from './components/EmpView';

function App() {
  return (
    <div className="App">
      <EmpView/>
      <AddEmployee/>
    </div>
  );
}

export default App;
