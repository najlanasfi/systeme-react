import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:[
     { matricule:Math.random(),username:'Najla Nasfi',email:'najla@gmail.com',password:'nnn'},
     { matricule:Math.random(),username:'Ichrak Jhidri',email:'ichrak@gmail.com',password:'iiii'},
     { matricule:Math.random(),username:'Haythem',email:'haythem@gmail.com',password:'hhhh'}, 
     { matricule:Math.random(),username:'Najla 2',email:'najla2@gmail.com',password:'nnn'},
     { matricule:Math.random(),username:'Ichrak2',email:'ichrak2@gmail.com',password:'iiii'},
     { matricule:Math.random(),username:'Haythem2',email:'haythem2@gmail.com',password:'hhhh'},
     { matricule:Math.random(),username:'Ichrak3',email:'ichrak3@gmail.com',password:'iiii'},
     { matricule:Math.random(),username:'Haythem3',email:'haythem3@gmail.com',password:'hhhh'},
 ],
 pointage:
 [
   {id:Math.random(),date:'09/11/2021',tempsEntre:'08:00',tempsSortie:'16:00'},
   {id:Math.random(),date:'10/11/2021',tempsEntre:'08:00',tempsSortie:'16:00'},
   {id:Math.random(),date:'11/11/2021',tempsEntre:'08:00',tempsSortie:'16:00'},
   {id:Math.random(),date:'13/11/2021',tempsEntre:'08:00',tempsSortie:'16:00'},
   {id:Math.random(),date:'14/11/2021',tempsEntre:'08:00',tempsSortie:'16:00'},
   {id:Math.random(),date:'15/11/2021',tempsEntre:'08:00',tempsSortie:'16:00'},
   {id:Math.random(),date:'16/11/2021',tempsEntre:'08:00',tempsSortie:'16:00'},
   {id:Math.random(),date:'17/11/2021',tempsEntre:'08:00',tempsSortie:'16:00'},
   {id:Math.random(),date:'17/11/2021',tempsEntre:'08:00',tempsSortie:'16:00'},
   
 ]
}

export const ProjetSlice = createSlice({
  name: 'user' ,
  initialState,
  reducers: {
    AddUser: (state,action) => {
      console.log(action.payload);
    state.user.push(action.payload)
    },
    AddPointage:(state,action)=> {
      state.pointage.push(action.payload)
    },
    DeletePointage:(state,action)=>
    {
     state.pointage=state.pointage.filter(el=>el.id!=action.payload.id)
    },
    EditPointages:(state,action)=>{
      let i=state.pointage.findIndex(el=>el.id==action.payload.id)
      state.pointage[i]={...state.pointage[i],date:action.payload.date}
    },
    DeleteUser:(state,action)=>
    {
state.user=state.user.filter(el=>el.matricule!=action.payload.matricule)
    }, 
    EditUsers:(state,action)=>
    {
      let iu=state.user.findIndex(el=>el.matricule==action.payload.matricule)
      state.user[iu]={...state.user[iu],username:action.payload.username}
    }

  
},
})

// Action creators are generated for each case reducer function
export const { AddUser,AddPointage, DeletePointage,EditPointages,DeleteUser,EditUsers} = ProjetSlice.actions

export default ProjetSlice.reducer