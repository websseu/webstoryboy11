import { Post } from '@/lib/types';
import Card from './card';

interface CardPageProps {
  posts: Post[];
}

export default function CardPage({ posts }: CardPageProps) {
  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6'>
      {posts.length > 0 ? (
        <Card posts={posts} />
      ) : (
        <div className='col-span-3 no-data border-t border-black pt-24'>
          게시물이 없습니다.
          <br />
          조금만 기다려 주세요! 💤✨
        </div>
      )}
    </div>
  );
}
