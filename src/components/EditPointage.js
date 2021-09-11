
import React, {useEffect, useState} from 'react'
import { Form ,Button,Container,Row,Col} from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux'
import {useParams} from 'react-router-dom'
import { EditPointages } from '../Slices/ProjetSlice';
import { useHistory } from 'react-router';
const EditPointage = () => {
    const history =useHistory();
  useEffect(()=>{
  console.log("hello");
  },[])
    const [newDate,setNewDate] = useState("")
    
    const dispatch= useDispatch()
    const params= useParams();
    const Uid=params.id
    const list = useSelector(state => state.projet.pointage)

    let  item = list.find((el)=>el.id==Uid)

   const handleEdit=()=>{  
   dispatch(EditPointages({id:Uid,date:newDate}))
   setTimeout(() => {
    history.push("/Pointages")
}, 500);
   }
    return (
        <div style={{marginTop:'3rem'}}>
        <Container > <Row>
                 <Col md={{ span: 6, offset: 3 }}>
             <h2 style={{marginBottom:'3rem'}}>Edit Pointage</h2>
         <Form>
         <Form.Group className="mb-3">
         <Form.Label>Date</Form.Label>
         <Form.Control type="date"  onChange={(e)=>setNewDate(e.target.value)} ></Form.Control>
         <Form.Label>Temps Entre</Form.Label>
         <Form.Control type="time" value={item.tempsEntre} disabled ></Form.Control>
         <Form.Label>Temps Sortie</Form.Label>
         <Form.Control type="time"value={item.tempsSortie} disabled ></Form.Control>
        <Button onClick={()=>handleEdit()} className="btn btn-dark btn-lg btn-block" style={{marginTop:'2rem'}}>Edit</Button>
          </Form.Group>
         </Form>
         </Col>
             </Row>
             </Container>
     </div>
    )
}

export default EditPointage
