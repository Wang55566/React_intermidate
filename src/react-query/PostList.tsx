import { useState } from 'react';
import usePosts from './hooks/postTodos';

const PostList = () => {

  const [ userId, setUserId ]= useState<number>()
  const { data, error, isLoading } = usePosts(userId)


  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(e) => setUserId(parseInt(e.target.value))}
        value={userId}
        className="form-select mb-3">
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {data?.map((data) => (
          <li key={data.id} className="list-group-item">
            {data.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
