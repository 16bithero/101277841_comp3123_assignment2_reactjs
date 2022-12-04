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

    let navigate = useNavigate();
    const [data, setData] = useState('')

    const addUser = async (event) => {
        event.preventDefault()
        const signup = {
            username: data.username,
            password: data.password,
        }
        axios.post('https://comp3123-assignment-101277841.herokuapp.com/user/add', signup)
            .then(res => navigate('/view'))
    }

    const onValueChanged = (event) => {
        event.preventDefault()
        setData({ ...data, [event.target.name]: event.target.value })
    }

    function refreshPage() {
        window.location.reload();
      }

    return (
        <>
            <br />
            <br />
            <div className="divmid">
                <div className="inside">
                    <div className="divBody">
                    <h2 style={{fontWeight:'bold'}}>Log In</h2>
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
                                <a href='/view'>
                                <Button variant="primary" size="lg">Log In</Button>
                                </a>
                            </Form>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
