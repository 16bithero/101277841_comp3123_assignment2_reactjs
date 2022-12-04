import React, { Component } from 'react'
import axios from 'axios'

export default class ViewEmployee extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             employee : [],
             first_name: "",
             last_name: "",
             email: ""
        }
    }

    componentDidMount = () =>{
        this.getEmpData()
    }
    
    //Get Emp
    getEmpData = () => {
        axios.get("https://comp3123-assignment-101277841.herokuapp.com/api/employees/")
        .then(res =>  { 
            console.log(res.data)
            this.setState({...this.state, employee : res.data})
        })
    }


  render() {
    return (
        <>
        <div>ViewEmployee</div>
        <button onClick={this.getUserData}>Get Users</button>
        </>
    )
  }
}
