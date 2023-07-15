import './UserPost.css';
import React, { useState} from 'react';

const UserPost = (props) => { 

  const [name, setName] = useState('');
  const [post, setPost] = useState(''); 
  
  

  function handleSubmit(e) {
    e.preventDefault();
    let newEntry = {
      name:name,
      post:post
    };

    
    // we are sending name and post(quote) to an API
    

    //Clear the form fields after submission
    setName('');
    setPost('');
  };


  return (
    <form className='user-post' onSubmit ={handleSubmit}>
      <label>Name:</label>
      <input 
          type ='text'
          id = 'name'
          value ={name}
          onChange={(e) => setName(e.target.value)}
          />
      <label>Post:</label>
        <input
           id='post'
           value={post}
           onChange={(e) => setPost(e.target.value)}
        />
    
        <button type='submit'>Submit</button>
    </form>

    );
  };




 export default UserPost;