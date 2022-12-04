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
    const [error, setError] = useState('')
    const [data, setData] = useState('')

    const addUser = async (event) => {
        event.preventDefault()
        const signup = {
            username: data.username,
            password: data.password,
        }
        axios.post('https://comp3123-assignment-101277841.herokuapp.com/user/add', signup)
            .then(res => navigate('/view'))
            .catch(function(error){
                setError("Username already exists")
            })
    }

    const userExist = () => {
        axios.get('https://comp3123-assignment-101277841.herokuapp.com/user')
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
                    <h2 style={{fontWeight:'bold'}}>Sign Up</h2>
                        <section className="divbox">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name='username' placeholder="Enter Username" value={data.username} onChange={event => onValueChanged(event)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Enter Password" value={data.password} onChange={event => onValueChanged(event)} />
                                </Form.Group>
                                <h2 style={{color: 'red', fontWeight: 'bold'}}>{error}</h2>
                                <Link to='/view'>
                                    <Button variant="primary" size="lg" type='submit' onClick={addUser}>Sign Up</Button>
                                </Link>
                            </Form>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
