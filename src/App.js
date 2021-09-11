import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import Login from "./components/Login.component";
import Signup from "./components/Signup"

import Menus from './components/Menus';
import UserList from './components/UserList';
import AddPointages from './components/AddPointages';
import PointagesList from './components/PointagesList';
import EditPointage from './components/EditPointage';

import UEdit from './components/UEdit';
import Cards from './components/Cards';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
function App() {
  return (
    
    <BrowserRouter>
    <Navigation/>

     <div className='systeme' style={{padding:"50px",backgroundColor:"grey",height:"85vh",overflow:"scroll"}}>
 <Switch>
 <Route exact path="/">
  <iframe width="1250" height="850"  style={{marginTop:"2.5rem"}}
  src="https://www.youtube.com/embed/7xyraO9-54s?autoplay=1&loop=1"
   title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen ></iframe>
   </Route>
   <Route path='/login'><Login /></Route>
   <Route path='/SignUp'><Signup /></Route>
   <Route path='/list'><UserList /></Route>
   <Route path='/AddPointage'><AddPointages /></Route>
   <Route path='/Pointages' ><PointagesList /></Route>
    
   <Route path='/pointage/:id' component={EditPointage}/>

   <Route path='/user/:matricule' component={UEdit}/>
   
 </Switch>
 </div>
 <Footer />
 
 </BrowserRouter>
  );
}

export default App;