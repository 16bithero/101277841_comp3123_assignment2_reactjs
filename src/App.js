import './App.css';
import AddEmployee from './components/AddEmployee';
import EmpView from './components/EmpView';
import Update from './components/Update';
import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar  bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Employee Management App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/view">Home</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/add' element={<AddEmployee/>}/>
          <Route path='/view' element={<EmpView/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
