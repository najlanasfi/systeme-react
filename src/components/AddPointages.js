import React,{useState} from 'react'
import { Form,Container,Button,Row,Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AddPointage } from '../Slices/ProjetSlice'
import { useHistory } from 'react-router';
const AddPointages = () => {
    const history =useHistory();
   const dispatch= useDispatch()
    const [newPointage, setNewPointage] = useState({matricule:Math.random(),date:'',tempsEntre:'',tempsSortie:''})
  const handleAdd=()=>{
      dispatch(AddPointage(newPointage))
      setTimeout(() => {
        history.push("/pointages")
    }, 500);
  }
  console.log(newPointage);
console.log();
  
    return (
        <div style={{marginTop:'3rem'}}>
           <Container > <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                <h2 style={{marginBottom:'3rem'}}>Add New Pointage</h2>
            <Form>
            <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" onChange={(e)=>setNewPointage({...newPointage,date:e.target.value})}></Form.Control>
            <Form.Label>Temps Entre</Form.Label>
            <Form.Control type="time" onChange={(e)=>setNewPointage({...newPointage,tempsEntre:e.target.value})}></Form.Control>
            <Form.Label>Temps Sortie</Form.Label>
            <Form.Control type="time" onChange={(e)=>setNewPointage({...newPointage,tempsSortie:e.target.value})}></Form.Control>
           <Button style={{color:"black"}} onClick={()=>handleAdd()} className="btn btn-dark btn-lg btn-block" style={{marginTop:'2rem'}}>ADD  </Button>
             </Form.Group>
            </Form>
            </Col>
                </Row>
                </Container>
        </div>
    )
}

export default AddPointages
