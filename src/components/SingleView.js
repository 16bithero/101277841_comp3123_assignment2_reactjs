import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes, NavLink, Link, useNavigate } from 'react-router-dom';

export default function SingleView() {


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

    
    return (
        <>
            <br />
            <br />
            <div className="divmid">
            <div className="inside">
                <div className="divBody">
                <h2 style={{fontWeight:'bold'}}>Employee Details</h2>
                    <section className="divbox">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <h1 style={{color: 'black', fontWeight: 'bold'}}>{first_name}</h1>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <h1 style={{color: 'black', fontWeight: 'bold'}}>{last_name}</h1>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <h1 style={{color: 'black', fontWeight: 'bold'}}>{email}</h1>
                            </Form.Group>
                            <br/>
                            <Link to='/view'>
                                <Button size="lg">Back to Employee List</Button>
                            </Link>
                        </Form>
                    </section>
                </div>
                </div>
            </div>
        </>
    )
}
