
import React from 'react'
import {Table,Button,Card} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { DeleteUser } from '../Slices/ProjetSlice'
import imageU from '../image/profile.png'
const UserItem = ({itemU}) => {
  const dispatch=useDispatch()
    const history= useHistory()

 const handleDelete=()=>{
     dispatch(DeleteUser({matricule:itemU.matricule}))

 }

 const handleEdit=()=>{
     history.push(`/user/${itemU.matricule}`)
 }
 console.log(itemU)
    return (
   <Card  style={{marginTop:"2rem", width: "20%" , marginLeft: "1rem" }}>
       <Card.Img variant="top" src={imageU}/>
        <Card.Body>
        <Card.Title>{itemU.username}</Card.Title>
        <Card.Title>{itemU.matricule}</Card.Title>
        <Card.Title>{itemU.email}</Card.Title>
        <Button style={{margin: "5px "}} onClick={handleDelete} variant="danger">Delete</Button>
      <Button onClick={()=>handleEdit()} variant="success">Edit</Button></Card.Body>
       </Card>
    )
}

export default UserItem
