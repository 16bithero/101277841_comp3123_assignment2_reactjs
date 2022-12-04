import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes, NavLink, Link, useNavigate } from 'react-router-dom';

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
        axios.put(`https://comp3123-assignment-101277841.herokuapp.com/employees/update/${id}`, inputEmp)
            .then(res => navigate('/view'))
    }
    
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="divmid">
            <div className="inside">
                <div className="divBody">
                    <br />
                    <section className="divbox">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" name='first_name' placeholder="Enter First Name" value={first_name} onChange={event => setFname(event.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" name='last_name' placeholder="Enter Last Name" value={last_name} onChange={event => setLname(event.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                            </Form.Group>
                            <Link to='/view'>
                                <Button variant="primary" size="lg" type='submit' onClick={updateEmployee}>Update Employee</Button>
                            </Link>
                        </Form>
                    </section>
                </div>
                </div>
            </div>
        </>
    )
}
