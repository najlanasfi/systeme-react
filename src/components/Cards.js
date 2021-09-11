import React from 'react';
import { Grid, Menu, Segment,Label ,Input} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
const Cards=({})=>{
    return(
        <Menu vertical style={{marginTop:'3rem'}} >
        <Menu.Item
          name='Users'>
         <Link to="/list">Users</Link> 
          <Label color='teal'>1</Label>
        </Menu.Item>

        <Menu.Item
          name='List des Pointages'
         
        >
        <Link to="/Pointages">List</Link>
        <Label>51</Label>
         
        </Menu.Item>

        <Menu.Item
          name='Ajouter Pointage'
       ><Link to="/AddPointage">Add pointages</Link>
         
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search mail...' />
        </Menu.Item>
      </Menu>
   )
}
export default Cards