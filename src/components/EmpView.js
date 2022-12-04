import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function EmpView() {

    let navigate = useNavigate();
    const [data, setData] = useState([]);

    const deleteEmployee = (id) => {
        axios.delete(`https://comp3123-assignment-101277841.herokuapp.com/employees/delete/${id}`)
            .then(res => navigate(0))
    }

    const getProductData = async () => {
        try {
            const emps = await axios.get(
                "https://comp3123-assignment-101277841.herokuapp.com/employees/")
            console.log(emps.data);
            setData(emps.data);
        } catch (e) {
            console.log(e);
        }
    };

    const passData = (data) => {
        console.log(data);
        let { _id, first_name, last_name, email } = data
        localStorage.setItem('_id', _id)
        localStorage.setItem('First name', first_name)
        localStorage.setItem('Last name', last_name)
        localStorage.setItem('email', email)
    }

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <>
            <br />
            <br />
            <div className="divmid">
                <div className="inside">
                    <div className="divBody">
                        <h2 style={{fontWeight:'bold'}}>Employee List</h2>
                        <section className="divbox">
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th colSpan={3}>Actions</th>
                                    </tr>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.first_name}</td>
                                            <td>{item.last_name}</td>
                                            <td>{item.email}</td>
                                            <td>
                                                <Link to='/single'>
                                                    <Button variant='info' onClick={() => passData(item)}>View</Button>
                                                </Link>

                                            </td>
                                            <td>
                                                <Link to='/update'>
                                                    <Button variant="warning" onClick={() => passData(item)}>Update</Button>
                                                </Link>

                                            </td>
                                            <td>
                                                <Button variant="danger" onClick={() => deleteEmployee(item._id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
