import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

export default function EmpView() {
    const [data, setData] = useState([]);

    const getProductData = async () => {
        try {
            const emps = await axios.get(
                "https://comp3123-assignment-101277841.herokuapp.com/api/employees/")
            console.log(emps.data);
            setData(emps.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
