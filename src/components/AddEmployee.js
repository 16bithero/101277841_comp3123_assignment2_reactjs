import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes, NavLink, Link, useNavigate } from 'react-router-dom';

export default function AddEmployee() {

    const INITIAL_VALUE = {
        first_name: "",
        last_name: "",
        email: ""
    }
    let navigate = useNavigate();
    const [data, setData] = useState(INITIAL_VALUE)

    const addEmployee = async (event) => {
        event.preventDefault()
        const inputEmp = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email
        }
        axios.post('https://comp3123-assignment-101277841.herokuapp.com/api/employees/add', inputEmp)
            .then(res => navigate('/view'))
    }

    const onValueChanged = (event) => {
        event.preventDefault()
        setData({ ...data, [event.target.name]: event.target.value })
    }


    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div class="divmid">
                <div class="inside">
                    <div class="divBody">
                        <br />
                        <section class="divbox">
                            <Form onSubmit={addEmployee}>
                                <Form.Group className="mb-3">
                                    <Form.Label>FName</Form.Label>
                                    <Form.Control type="text" name='first_name' placeholder="First name" value={data.first_name} onChange={event => onValueChanged(event)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Enter email" value={data.email} onChange={(event) => onValueChanged(event)} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>LName</Form.Label>
                                    <Form.Control type="text" name='last_name' placeholder="Last Name" value={data.last_name} onChange={event => onValueChanged(event)} />
                                </Form.Group>
                                <Link to='/view'>
                                    <Button variant='success' type='submit' onClick={addEmployee}>Submit</Button>
                                </Link>
                            </Form>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
