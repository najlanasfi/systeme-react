import React, { Component } from "react";
import { Container,Row,Col } from "react-bootstrap";

export default class Login extends Component {
    render() {
        return (
            <form>
<Container style={{marginTop:'4rem',justifyContent:"center"}}> <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                <h3 >Login</h3>

                <div className="form-group" style={{marginTop:'2rem'}}>
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group" style={{marginTop:'2rem'}}>
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group" style={{marginTop:'2rem'}}>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" >Sign in</button>
                <p className="forgot-password text-right" style={{marginTop:'2rem'}}>
                    Forgot <a href="#">password?</a>
                </p>
                </Col>
                </Row>
                </Container>
            </form>
        );
    }
}
