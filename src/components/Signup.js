import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import { BrowserRouter, Route, Routes, NavLink, Link, useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

export default function Signup() {

    const INITIAL_VALUE = {
        first_name: "",
        last_name: "",
        username: "",
        password: ""
    }

    let navigate = useNavigate();
    const [error, setError] = useState('')
    const [data, setData] = useState('')
    const validInput = new RegExp('^[A-Za-z]+$');
    const [fnameErr, setFnameErr] = useState(false);
    const [lnameErr, setLnameErr] = useState(false);

    const addUser = async (event) => {
        event.preventDefault()
        if (!validInput.test(data.first_name)) {
            setFnameErr(true)
        }
        if (validInput.test(data.last_name)) {
            const signup = {
                first_name: data.first_name,
                last_name: data.last_name,
                username: data.username,
                password: data.password,
            }
            axios.post('https://comp3123-assignment-101277841.herokuapp.com/user/add', signup)
                .then(res => navigate('/login'))
                .catch(function (error) {
                    setError(' (Username already exists)')
                })
        } setLnameErr(true)
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
                        <h2 style={{ fontWeight: 'bold' }}>Sign Up</h2>
                        <section className="divbox">
                            <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} >
                                    <Form.Label>First Name</Form.Label>
                                    {fnameErr && <a style={{ color: '#E32636', fontWeight: 'bold' }}> (Invalid format. Only letters allowed.)</a>}
                                    <Form.Control type="text" name='first_name' placeholder="Enter First Name" value={data.first_name} onChange={event => onValueChanged(event)} />
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label>Last Name</Form.Label>
                                    {lnameErr && <a style={{ color: '#E32636', fontWeight: 'bold' }}> (Invalid format. Only letters allowed.)</a>}
                                    <Form.Control type="text" name='last_name' placeholder="Enter Last Name" value={data.last_name} onChange={event => onValueChanged(event)} />
                                </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <a style={{ color: '#E32636', fontWeight: 'bold' }}>{error}</a>
                                    <Form.Control type="text" name='username' placeholder="Enter Username" value={data.username} onChange={event => onValueChanged(event)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Enter Password" value={data.password} onChange={event => onValueChanged(event)} />
                                </Form.Group>
                                <Link to='/view'>
                                    <Button variant="primary" size="lg" type='submit' onClick={addUser}>Sign Up</Button>
                                </Link>
                                <Form.Label>Have an account?</Form.Label>
                                <br/>
                                <a href='/login'>
                                    <Button variant="primary" size="lg">Login</Button>
                                </a>
                            </Form>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
