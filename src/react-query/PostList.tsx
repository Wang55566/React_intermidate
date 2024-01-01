import { useState } from 'react';
import usePosts from './hooks/postTodos';

const PostList = () => {
  const pageSize = 10;
  const [ page, setPage ] = useState(1);
  const { data, error, isLoading } = usePosts({
    page, pageSize
  });


  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data?.map((data) => (
          <li key={data.id} className="list-group-item">
            {data.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page===1}
        className="btn btn-primary my-3"
        onClick={() => setPage(page - 1)}
        >Previous</button>
      <button
        className="btn btn-primary my-3 ms-1"
        onClick={() => setPage(page + 1)}
        >Next</button>
    </>
  );
};

export default PostList;
