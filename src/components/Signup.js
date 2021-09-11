import React, { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import {AddUser} from '../Slices/ProjetSlice'
import { useHistory } from 'react-router';
const  SignUp = ()=>{
  const history =useHistory();
  const dispatch=useDispatch()
  const [newUser,setNewUser]= useState({matricule:Math.random(),username:'',email:'',password:''})
  const handleAdd=()=>{
      dispatch(AddUser(newUser)) 
      setTimeout(() => {
        history.push("/list")
    }, 500);
  }
 return (
            <form onSubmit={(e)=>e.preventDefault()} style={{marginTop:'3rem'}}>
                <Container style={{marginTop:'2rem'}}> <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                <h3>Register</h3>
                <div className="form-group" style={{marginTop:'2rem'}}>
                    <label>UserName</label>
                    <input type="text" className="form-control" 
                    onChange={(e)=>setNewUser({...newUser,username:e.target.value})} placeholder="Enter UserName" />
                </div>
                <div className="form-group"style={{marginTop:'2rem'}}>
                    <label>Email</label>
                    <input type="email" className="form-control"
                     onChange={(e)=>setNewUser({...newUser,email:e.target.value})} placeholder="Enter email" />
                </div>

                <div className="form-group" style={{marginTop:'2rem'}}>
                    <label>Password</label>
                    <input type="password" className="form-control" 
                    onChange={(e)=>setNewUser({...newUser,password:e.target.value})} placeholder="Enter password" />
                </div>

                <button style={{marginTop:'2rem'}} onClick={()=>handleAdd()} className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right" style={{marginBottom:"2rem"}}style={{marginTop:'2rem'}}>
                    Already registered <a href="#">log in?</a>
                </p>
                </Col>
                </Row>
                </Container>
            </form>
        );
    }

    export default SignUp