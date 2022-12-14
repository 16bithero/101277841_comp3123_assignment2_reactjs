import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes, NavLink, Link, useNavigate } from 'react-router-dom';

export default function Login() {

    const INITIAL_VALUE = {
        username: "",
        password: ""
    }

    const passData = (data) => {
        let { username } = data
        localStorage.setItem('username', username)
    }

    let navigate = useNavigate();
    const [data, setData] = useState('')
    const [error, setError] = useState('')

    const userLogin = async (event) => {
        event.preventDefault()
        const login = {
            username: data.username,
            password: data.password,
        }
        axios.post('https://comp3123-assignment-101277841.herokuapp.com/user/login', login)
            .then(res => navigate('/view'))
            .then(res => navigate(0))
            .then(passData(data.username))
            .catch(function (error) {
                console.log(error)
                setError("Invalid Credentials")
            })
    }

    const onValueChanged = (event) => {
        event.preventDefault()
        setData({ ...data, [event.target.name]: event.target.value })
    }


    return (
        <>
            <br />
            <br />
            <div className="divmid">
                <div className="inside">
                    <div className="divBody">
                        <h2 style={{ fontWeight: 'bold' }}>Log In</h2>
                        <section className="divbox">
                            <Form onSubmit={userLogin}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name='username' placeholder="Enter First Name" value={data.username} onChange={event => onValueChanged(event)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Enter Last Name" value={data.password} onChange={event => onValueChanged(event)} />
                                </Form.Group>
                                <h4 style={{ color: '#E32636', fontWeight: 'bold', textAlign: 'center' }}>{error}</h4>
                                <a href='/view'>
                                    <Button variant="primary" size="lg" type='submit'>Log In</Button>
                                </a>
                                <br /><br />
                                <Form.Label>Don't have an account?</Form.Label>
                                <a href='/signup'>
                                    <Button variant="primary" size="lg">Sign up</Button>
                                </a>
                            </Form>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
