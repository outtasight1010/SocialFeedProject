import './UserPost.css';


function UserPost({ name, posts }) {
    return (
      <div className="card">
        <h2 className="user">{name}</h2>
        <p>
          <h2 className='posts'>{posts}</h2>
          
        </p>
      </div>
    );
  }
  
  export default UserPost;