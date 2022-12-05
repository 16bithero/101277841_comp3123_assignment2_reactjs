import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../index.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AddEmployee() {

    const INITIAL_VALUE = {
        first_name: "",
        last_name: "",
        email: ""
    }

    let navigate = useNavigate();
    const [data, setData] = useState(INITIAL_VALUE)
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const validInput = new RegExp('^[A-Za-z]+$');
    const [emailErr, setEmailErr] = useState(false);
    const [fnameErr, setFnameErr] = useState(false);
    const [lnameErr, setLnameErr] = useState(false);

    const addEmployee = async (event) => {
        event.preventDefault()
        if (validInput.test(data.first_name) && validInput.test(data.last_name) && validEmail.test(data.email)) {

            const inputEmp = {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email
            }
            axios.post('https://comp3123-assignment-101277841.herokuapp.com/employees/add', inputEmp)
                .then(res => navigate('/view'))
        }
        setEmailErr(!validEmail.test(data.email)) 
        setLnameErr(!validInput.test(data.last_name)) 
        setFnameErr(!validInput.test(data.first_name))
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
                        <h2 style={{ fontWeight: 'bold' }}>Add Employee</h2>
                        <section className="divbox">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    {fnameErr && <a style={{ color: '#E32636', fontWeight: 'bold' }}> (Invalid format. Only letters allowed.)</a>}
                                    <Form.Control type="text" name='first_name' placeholder="Enter First Name" value={data.first_name} onChange={event => onValueChanged(event)} required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    {lnameErr && <a style={{ color: '#E32636', fontWeight: 'bold' }}> (Invalid format. Only letters allowed.)</a>}
                                    <Form.Control type="text" name='last_name' placeholder="Enter Last Name" value={data.last_name} onChange={event => onValueChanged(event)} required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    {emailErr && <a style={{ color: '#E32636', fontWeight: 'bold' }}> (Invalid format. Use example@domain.com)</a>}
                                    <Form.Control type="email" name='email' placeholder="Enter Email" value={data.email} onChange={(event) => onValueChanged(event)} required />
                                </Form.Group>
                                <Link to='/view'>
                                    <Button variant="primary" size="lg" type='submit' onClick={addEmployee}>Add Employee</Button>
                                </Link>
                            </Form>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
