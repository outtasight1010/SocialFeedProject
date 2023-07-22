import React, { useState } from 'react';
import './DisplayPosts.css';
import Post from '../Post/Post';



const DisplayPosts = (props) => {
  return (
  <table className='display-posts'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Post</th>
      </tr>
    </thead>
    <tbody>
    {props.parentEntries.map((entry) => {
      return (
        <tr>

          <Post entry = {entry}/>
          </tr>
       
      );

    })}
    </tbody>
  </table>
  );


}
export default DisplayPosts;


