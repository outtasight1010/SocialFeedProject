import React, { useState } from 'react';
import './DislikeButton.css';


function DislikeButton() {
   const [dislikes, setDislikes] = useState(0);
   const [disliked, setDisliked] = useState(false);
   return (
      <button
         className={`dislike-button ${disliked ? 'disliked' : ''}`}
         onClick={() => {
            setDislikes(dislikes + 1);
            setDisliked(true);
         }}
      >
         {dislikes} Dislikes
      </button>
   );
}
export default DislikeButton;