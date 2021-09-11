
import React from 'react'
import { useDispatch } from 'react-redux'
import {Table,Button} from 'react-bootstrap'
import { DeletePointage, EditPointage } from '../Slices/ProjetSlice'
import { useHistory } from 'react-router'

const PointagesItem = ({item}) => {
    const dispatch=useDispatch()
    const history= useHistory()

 const handleDelete=()=>{
     dispatch(DeletePointage({id:item.id}))

 }

 const handleEdit=()=>{
     history.push(`/pointage/${item.id}`)
 }

    return (

      <Table style={{ marginLeft: "1rem",marginTop:'3rem'}} striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Date</th>
      <th>Temps Entre</th>
      <th>Temps Sortie</th>
      <th>Edit Delete </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{item.date}</td>
      <td>{item.tempsEntre}</td>
      <td>{item.tempsSortie}</td>
      <td><Button  style={{margin: "5px "}} onClick={()=>handleEdit()} variant="success">Edit</Button>
        <Button onClick={handleDelete} variant="danger">Delete</Button>
      </td>
    </tr>
    </tbody>
</Table>
       
    )
}

export default PointagesItem
