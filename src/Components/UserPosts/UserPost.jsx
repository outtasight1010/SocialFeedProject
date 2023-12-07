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
    console.log(newEntry);
    props.addNewEntryProp(newEntry)

    
    // we are comment to an API
    //Clear the form fields after submission
    
  }
  return (
    <form className='user-post' onSubmit ={handleSubmit}>
      <label>Name:</label>
      <input type ='text' value ={name} onChange={(e) => setName(e.target.value)} />
      <label>Post:</label>
        <input type='text' value={post} onChange={(e) => setPost(e.target.value)} />
      <button className = 'btn btn-primary' button type='submit' style={{ width: "60px", height: "30px", font:"small-caption"}}>Create</button>
    </form>

  );
};




 export default UserPost;