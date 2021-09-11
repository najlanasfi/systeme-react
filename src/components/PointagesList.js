import React ,{useState} from 'react'
import { useSelector } from 'react-redux'
import PointagesItem from './PointagesItem';

const PointagesList = () => {

    const list1=useSelector(state => state.projet.pointage)
  console.log(list1);  
  return (
        <div>
       
            {list1.filter(el=>el.date).map(item=>(
    <PointagesItem item={item}/>
            ))}
  
     </div>
    )
}

export default PointagesList
