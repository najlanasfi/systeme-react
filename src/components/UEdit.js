import React, {useState} from 'react'
import { Form ,Button,Container,Row,Col} from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux'
import {useParams} from 'react-router-dom'
import { useHistory } from 'react-router';
import {EditUsers} from '../Slices/ProjetSlice';

const UEdit = () => {
    const history =useHistory();
    
    const [newUsername,setNewUsername] = useState("")
    const dispatch= useDispatch()
    const params= useParams();
    const Umatricule=params.matricule
    const listU = useSelector(state => state.projet.user)

    let  itemU = listU.find((el)=>el.matricule==Umatricule)

   const handleEditU=()=>{  
   dispatch(EditUsers({matricule:Umatricule,username:newUsername}))
   
   setTimeout(() => {
       history.push("/list")
   }, 500);
   }
    return (
        <div style={{marginTop:'3rem'}}>
        <Container > <Row>
                 <Col md={{ span: 6, offset: 3 }}>
             <h2 style={{marginBottom:'3rem'}}>Edit User</h2>
         <Form>
         <Form.Group className="mb-3">
         <Form.Label>Username</Form.Label>
         <Form.Control type="text" placeholder={itemU.username}  onChange={(e)=>setNewUsername(e.target.value)} ></Form.Control>
      
        
        <Button onClick={()=>handleEditU()} className="btn btn-dark btn-lg btn-block" style={{marginTop:'2rem'}}>Edit</Button>
          </Form.Group>
         </Form>
         </Col>
             </Row>
             </Container>
     </div>
    )
}

export default UEdit
