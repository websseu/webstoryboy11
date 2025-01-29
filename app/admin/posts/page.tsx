import { Metadata } from 'next';
import PostList from './post-list';

export const metadata: Metadata = {
  title: 'Admin Posts',
};

export default function PostsPage() {
  return <PostList />;
}
