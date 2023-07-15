import React, { useState } from 'react';
//import PostListForm from './Components/PostList/PostList';
import NavBarText from './Components/NavBar/NavBar';
import UserPost from './Components/UserPost';
import './App.css';
import 'bootstrap';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import LikeButton from './Components/Buttons/LikeButton';
import DislikeButton from './Components/Buttons/DislikeButton';





function App () {
  const[entries,setEntries] =useState([{name:'Michelle Lamelza', post:'I love cats.'},{name:'Melissa Lamelza', post:'I prefer doggos.'}])
  function addNewEntry(entry) {
    let tempEntries = [entries,...entry];
    setEntries(tempEntries);
  }

  return(
  <div>
    <NavBarText/>
    <DisplayPosts parentEntries={entries}/>
    <LikeButton/>
    <DislikeButton/>
    

    <UserPost addNewEntryProp={addNewEntry}/>
    
  </div>

  );


  
};

  

    
export default App;
