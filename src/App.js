import React, { useState } from 'react';
import PostListForm from './Components/PostList/PostList';
import NavBarText from './Components/NavBar/NavBar';
import './App.css';
import 'bootstrap';
import UserForm from './Components/CreatePostForm/CreatePostForm';
import UserList from './Components/Posts/Posts';
import LikeButton from './Components/Buttons/LikeButton';
import DislikeButton from './Components/Buttons/DislikeButton';







function App() {
  const [users, setUsers] = useState ([
    
    
]);
    const generateId = () => {
      let randomId;
      let idExists = true;
      while (idExists) {
        randomId = Math.floor(Math.random() * 100000);
        let userExists = users.filter((user) => user.id === randomId);
        if (userExists.length > 0) {
          continue;
        } else {
          idExists = false;
        }
      }
      return randomId;
    };
    

    const addUser = (user) => {
      let newId = generateId(); // getting a unique id before updating
      let finalUser = {
        id: newId,
        ...user
      };
      let updatedUsers = [...users, finalUser];
      setUsers(updatedUsers);
    };

  return(

    <div className='container-fluid'>
      <h3 style = {{margin:'1em'}}>Social
        <small className='text-muted'>Feed</small></h3>
        
      <div className='border-box'>
        <NavBarText/>
        <PostListForm/>
      </div>
      
      <div className='border'>
      
      <UserForm addUser = {addUser}/>
      <UserList users = {users}/>
      <LikeButton/>
      <DislikeButton/>

            </div>
      <div>
      
      
      
          
        </div>
    </div>
      
     
    
  );
}

export default App;
