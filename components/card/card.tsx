import { Post } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { LuClock8, LuFileSpreadsheet, LuPresentation } from 'react-icons/lu';
import CardTags from './card-tags';
import CardLikes from './card-likes';
import { formatTimeAgo } from '@/lib/utils';

interface CardProps {
  posts: Post[];
}

export default function Card({ posts }: CardProps) {
  return (
    <>
      {posts.map((post) => (
        <div key={post._id} className='mb-1 group'>
          <div className='relative block'>
            <Image
              src={post.images?.[0] || '/images/default.jpg'}
              alt={`${post.title} 관련 이미지`}
              width={500}
              height={400}
              className='rounded-none transition-all duration-500 ease-in-out group-hover:brightness-75'
            />
            <div className='absolute inset-0 flex gap-1 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <Link
                href={`/page/${post.slug}`}
                className='bg-black p-2 rounded-full'
              >
                <LuFileSpreadsheet className='h-4 w-4 text-white' />
              </Link>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='bg-black p-2 rounded-full cursor-pointer'
              >
                <LuPresentation className='h-4 w-4 text-white' />
              </a>
            </div>
          </div>
          <div className='py-3'>
            <div className='flex gap-1 mt-1 mb-2'>
              <CardTags tags={post.tags} />
              <CardLikes likes={post.numLikes} />
            </div>
            <h3 className='text-xl leading-8 font-nanum text-black200'>
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
              <span className='text-[8px] pl-1'>{post.numViews}</span>
            </h3>
            <div className='mt-1'>
              <span className='text-xs text-gray-500 flex items-center gap-1'>
                <LuClock8 /> {post.author || '작성자 미상'} ·{' '}
                {formatTimeAgo(post.createdAt)}에 작성함
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
