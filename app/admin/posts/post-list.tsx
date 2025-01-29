import { getAllPosts } from '@/lib/actions/post.actions';

export default async function PostList() {
  const appPosts = await getAllPosts();

  return (
    <div>
      <h2>게시물 목록</h2>
      <ul>
        {appPosts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
