import React, { useState } from 'react';
import Post from './Components/Post/Post';
import NavBarText from './Components/NavBar/NavBar';
import UserPost from './Components/UserPosts/UserPost';
import './App.css';
import 'bootstrap';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import LikeButton from './Components/Buttons/LikeButton';
import DislikeButton from './Components/Buttons/DislikeButton';





function App () {
  const [entries, setEntries] =useState([{name:'Michelle Lamelza', post:'I love kitties.'},{name:'Melissa Lamelza', post:'I prefer doggos.'}])
  function addNewEntry(entry) {

    let tempEntries = [entry, ...entries];

    setEntries(tempEntries);
  }

  return (
    
   
  <div className='container-fluid'>
    
    <div className='row'>
      <NavBarText/>
      <div className='col-md-6'>
    
    <DisplayPosts parentEntries={entries}/>
    <UserPost addNewEntryProp={addNewEntry}/>
    
    </div>
    </div>
    </div>
 


  );


  
};

export default App;
