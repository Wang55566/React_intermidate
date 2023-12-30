import usePosts from './hooks/postTodos';

const PostList = () => {

  const { data, error, isLoading } = usePosts()


  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {data?.map((data) => (
        <li key={data.id} className="list-group-item">
          {data.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
