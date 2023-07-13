
import UserPost from "../UserPost";


function UserList({ users }) {
  const renderedUsers = users.map((user) => {
    return (
      <UserPost
        key={user.id}
        name={user.name}
        posts={user.posts}
      />
    );
  });
  return <div>{renderedUsers}</div>;
}

export default UserList;