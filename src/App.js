import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div className="App">
      <AddEmployee/>
      <ViewEmployee/>
    </div>
  );
}

export default App;
