import React ,{useState} from 'react'
import { useSelector } from 'react-redux'
import UserItem from './UserItem';

const UserList = () => {

    const listU=useSelector(state => state.projet.user)
  console.log(listU);  
  return (
        <div style={{display:"flex",marginTop:'1.5rem',flexWrap:'wrap',justifyContent:"center"}}>
            {listU.filter(el=>el.matricule).map(itemU=>(
    <UserItem itemU={itemU}/>
            ))}
  
     </div>
    )

}

export default UserList
