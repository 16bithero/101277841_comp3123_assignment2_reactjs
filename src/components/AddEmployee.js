import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function AddEmployee() {

    const INITIAL_VALUE = {
        first_name: "",
        last_name: "",
        email: ""
    }

    const [data, setData] = useState(INITIAL_VALUE)

    const addEmployee = async (event) => {
        event.preventDefault()
        const inputEmp = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email
        }
        axios.post('https://comp3123-assignment-101277841.herokuapp.com/api/employees/add', inputEmp)
            .then(res => console.log(res))
    }

    const onValueChanged = (event) => {
        event.preventDefault()
        setData({ ...data, [event.target.name]: event.target.value })
    }


    return (
    <>
            <Form onSubmit={addEmployee}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" value={data.email} onChange={(event) => onValueChanged(event)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridFullname">
                        <Form.Label>FName</Form.Label>
                        <Form.Control name='first_name' placeholder="First name" value={data.first_name} onChange={event => onValueChanged(event)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridFullname">
                        <Form.Label>LName</Form.Label>
                        <Form.Control name='last_name' placeholder="Last Name" value={data.last_name} onChange={event => onValueChanged(event)} />
                    </Form.Group>
                </Row>
                <Button variant='success' type='submit' onClick={addEmployee}>Submit</Button>
                </Form>
                <h3>{data.first_name}</h3>
                <h3>{data.last_name}</h3>
                <h3>{data.email}</h3>
            </>
            )
}
