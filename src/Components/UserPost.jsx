import './UserPost.css';
import React, { useState} from 'react';

const UserPost = () => { 
  const [name, setName] = useState('');
  const [post, setPost] = useState(''); 
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // we are sending name and post(quote) to an API
    console.log('Name:', name);
    console.log('Post:', post);

    //Clear the form fields after submission
    setName('');
    setPost('');
  
  };


return (
  <form className='user-post' onSubmit ={handleSubmit}>
    <div>
      <label htmlFor='name'>Name:</label>
      <input 
          type ='text'
          id = 'name'
          value ={name}
          onChange={(e) => setName(e.target.value)}
          />
    </div>
    <div>
      <label htmlFor='post'>Post:</label>
      <textarea
        id='post'
        value={post}
        onChange={(e) => setPost(e.target.value)}
        ></textarea>
    </div>
    <button type='submit'>Submit</button>
  </form>

  );
};


 export default UserPost;