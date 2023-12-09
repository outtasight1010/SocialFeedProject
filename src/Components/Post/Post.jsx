import React, { useState } from 'react';
import './Post.css';

const Post = (props) => {

    const [likeCounter, setLikeCount] = useState(0);
    const [dislikeCounter, setDislikeCount] = useState(0);

    const [activeBtn, setActiveBtn] = useState('none');

    const handleLike = () => {
        if (activeBtn === "none") {
            setLikeCount(likeCounter+1);
            setActiveBtn("like");
            return;
        }
        else if (activeBtn === "like") {
            setLikeCount(likeCounter - 1);
            setActiveBtn("none");
            return;
        }
        else if (activeBtn === "dislike") {
            setDislikeCount(dislikeCounter - 1);
            setActiveBtn("like");

        }
};

    const handleDislike = () => {
        if (activeBtn === "none") {
            setDislikeCount(dislikeCounter+1);
            setActiveBtn("dislike");
            return;
        }
        else if (activeBtn === "dislike") {
            setDislikeCount(dislikeCounter - 1);
            setActiveBtn("none");
            return;
        
        }
        else if (activeBtn === "like") {
            setDislikeCount(dislikeCounter +1);
            setLikeCount(likeCounter -1);
            setActiveBtn("dislike");
        }
    };

        return (
            <div>
                <h2>{props.entry.name}</h2>
                <p>{props.entry.post}</p>
                <div className='like-dislike-buttons'>
                    <button id = "like-button" className={`btn ${activeBtn === "like" ? "like-active": ""}`}onClick = {handleLike}>
                        <img className='dislike-icon' src = "likedButton.png" alt = "like post" /> {likeCounter}
                    </button>
                    <button id = "dislike-button" className= {`btn ${activeBtn === "dislike" ? "dislike-active": ""}`}onClick = {handleDislike}>
                        <img className='like-icon' src = 'likedButton.png' alt = "dislike post"/> {dislikeCounter}
                    </button>

                </div>
                <br/>
                <hr/>


            </div>

        );

};

export default Post;
