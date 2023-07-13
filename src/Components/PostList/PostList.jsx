import './PostList.css';



const PostListForm = () => {
    return (
    
        <form>
            <div className="form-group">
                
                <label htmlFor="name" className = 'form-label'>Name</label>
                <input id = 'name' type ='text' className = 'form-control'/>
            </div>
            <div className="form-group">
    
                <label htmlFor="post" className = 'form-label'>Post</label>
                <input id = 'post' type ='text' className = 'form-control'/>
            </div>
            <button className = 'btn btn-primary' button style={{ width: "60px", height: "30px", font:"small-caption"}}>Create</button>
        </form>
        
    );
};
export default PostListForm;
