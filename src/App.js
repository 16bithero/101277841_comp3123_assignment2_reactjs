import './App.css';
import AddEmployee from './components/AddEmployee';
import EmpView from './components/EmpView';
import Update from './components/Update';
import { BrowserRouter, Route, Routes, NavLink, useLocation  } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Signup from './components/Signup';
import SingleView from './components/SingleView';
import Home from './components/Home'
import Login from './components/Login'

function App() {
  let location = window.location.pathname
  console.log(location)
  return (
    <div>
      <BrowserRouter>
      <Navbar  className="color-nav"  variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Employee Management App</Navbar.Brand>
        {location!=="/" ? (
          <>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/view">Home</Nav.Link>
            <Nav.Link href="/add">Add Employee Record</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item style={{color: '#414044'}}href="#action/3.1">Profile</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item style={{color: '#414044'}} href="/">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
        </>) : ""}
      </Container>
    </Navbar>
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/add' element={<AddEmployee/>}/>
          <Route path='/single' element={<SingleView/>}/>
          <Route path='/view' element={<EmpView/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
