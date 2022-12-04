import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
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
        axios.put(`https://comp3123-assignment-101277841.herokuapp.com/api/employees/update/${id}`, inputEmp)
            .then(res => navigate('/view'))
    }

    // const onValueChanged = (event) => {
    //     event.preventDefault()
    //     /setData({ ...data, [event.target.name]: event.target.value })
    // }


    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div class="divmid">
                <div class="divBody">
                    <br />
                    <section class="divbox">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>FName</Form.Label>
                                <Form.Control type="text" name='first_name' placeholder="First name" value={first_name} onChange={event => setFname(event.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>LName</Form.Label>
                                <Form.Control type="text" name='last_name' placeholder="Last Name" value={last_name} onChange={event => setLname(event.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
                            </Form.Group>
                            <Link to='/view'>
                                <Button variant='success' type='submit' onClick={updateEmployee}>Submit</Button>
                            </Link>
                        </Form>
                    </section>
                </div>
            </div>
        </>
    )
}
