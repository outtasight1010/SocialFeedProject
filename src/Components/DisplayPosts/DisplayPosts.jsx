import React, { useState } from 'react';
import './DisplayPosts.css';
import UserPost from '../UserPost';


const DisplayPosts = (props) => {
  return (
  <table>
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
          <td>{entry.name}</td>
          <td>{entry.post}</td>
        </tr>
      );

    })}
    </tbody>
  </table>
  );


}
export default DisplayPosts;


