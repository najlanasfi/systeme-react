import React from 'react';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  Menu } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const Menus=({})=>{
    return(
      <Menu>
     <Menu.Menu position='right' >
        <Menu.Item style={{width:"150px",marginLeft:"2rem"}}>
       <Link to="/login">Sign In</Link>
        </Menu.Item>
<Menu.Item name='help'  style={{width:"150px",marginLeft:"2rem"}}>
<Link to="/SignUp" >Sign Up</Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    
    )
}
export default Menus