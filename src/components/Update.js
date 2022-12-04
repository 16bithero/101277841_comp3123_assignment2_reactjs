import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes, NavLink, Link, useNavigate} from 'react-router-dom';

export default function Update() {
    

    let navigate = useNavigate();
    const [eid, setID] = useState('')
    const [first_name, setFname] = useState('')
    const [last_name, setLname] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        setID(localStorage.getItem('_id'));
        setFname(localStorage.getItem('First name'));
        setLname(localStorage.getItem('Last name'));
        setEmail(localStorage.getItem('email'))
    }, []);

  

  

    const updateEmployee = async (event) => {
        event.preventDefault()
        const id = eid
        const inputEmp = {
            first_name: first_name,
            last_name: last_name,
            email: email
        }
        axios.put(`https://comp3123-assignment-101277841.herokuapp.com/api/employees/update/${id}`, inputEmp)
            .then(res => navigate('/view'))  
    }

    // const onValueChanged = (event) => {
    //     event.preventDefault()
    //     /setData({ ...data, [event.target.name]: event.target.value })
    // }


    return (
    <>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridFullname">
                        <Form.Label>FName</Form.Label>
                        <Form.Control name='first_name' placeholder="First name" value={first_name} onChange={event => setFname(event.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridFullname">
                        <Form.Label>LName</Form.Label>
                        <Form.Control name='last_name' placeholder="Last Name" value={last_name} onChange={event => setLname(event.target.value)} />
                    </Form.Group>
                </Row>
                <Link to='/view'>
                    <Button variant='success' type='submit' onClick={updateEmployee}>Submit</Button>
                </Link>
                </Form>
                <h3>{first_name}</h3>
                <h3>{last_name}</h3>
                <h3>{email}</h3>
            </>
            )
}
