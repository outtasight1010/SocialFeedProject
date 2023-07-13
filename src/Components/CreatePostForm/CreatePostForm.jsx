import './CreatePostForm.css'
import {useState} from 'react';



function UserForm({addUser}) {
    const [name, setName] = useState("");
    const [posts, setPosts] = useState("");
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let user = {
        name,
        postName:posts
    
    };
    addUser(user);
    setName('');
    setPosts('');
};
  
    return (
      <form className="user-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
        Post:
        <input
          type="text"
          name="posts"
          value={posts}
          onChange={(e) => setPosts(e.target.value)}
        />
        </label>
        <button type="submit">Add Post</button>
    </form>
    
  );
}

export default UserForm;