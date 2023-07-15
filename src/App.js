import React, { useState } from 'react';
//import PostListForm from './Components/PostList/PostList';
import NavBarText from './Components/NavBar/NavBar';
import UserPost from './Components/UserPost';
import './App.css';
import 'bootstrap';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';



function App () {
  const[entries,setEntries] =useState([{name:'Michelle Lamelza', post:'Cats > dogs.'},{name:'Melissa Lamelza', post:'I prefer doggos.'}])
  function addNewEntry(entry) {
    let tempEntries = [entries,...entry];
    setEntries(tempEntries);
  }

  return(
  <div>
    <NavBarText/>
    <DisplayPosts parentEntries={entries}/>

    <UserPost addNewEntryProp={addNewEntry}/>
  </div>

  );


  
};

  

    
export default App;
