import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes, NavLink, Link, useNavigate } from 'react-router-dom';

export default function Signup() {

    const INITIAL_VALUE = {
        username: "",
        password: ""
    }

    const [data, setData] = useState('')

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
        <div className="divmid">
        <div className="inside">
            <div className="divBody">
                <br />
                <section className="divbox">
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name='username' placeholder="Enter First Name" value={data.username} onChange={event => onValueChanged(event)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Enter Last Name" value={data.password} onChange={event => onValueChanged(event)} />
            </Form.Group>
            <Link to='/view'>
                <Button variant="primary" size="lg" type='submit'>Sign Up</Button>
            </Link>
        </Form>
        </section>
                </div>
                </div>
            </div>
        </>
    )
}
