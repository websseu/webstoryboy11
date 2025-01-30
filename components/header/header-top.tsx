import Link from 'next/link';
import { GiMoebiusStar } from 'react-icons/gi';
import { MdStars } from 'react-icons/md';
import UserButton from '../button/user-button';

export default function HeaderTop() {
  return (
    <div className='flex items-center justify-between mx-4'>
      {/* 왼쪽 아이콘 */}
      <div className='w-[200px]'>
        <div className='w-9 h-9 bg-background rounded-full items-center justify-center ring ring-gray-300/20 hover:bg-red-50 bg-mainBg flex cursor-pointer'>
          <Link href='/'>
            <GiMoebiusStar size='20' />
          </Link>
        </div>
      </div>

      {/* 가운데 로고 */}
      <div className='md:my-2 my-1 bg-background md:px-4 px-2'>
        <Link
          href={'/'}
          className='flex items-center md:text-8xl sm:text-7xl text-6xl poppins uppercase font-black'
        >
          <span className='mr-[-0.5vw] inline-block'>st</span>
          <MdStars className='animate-color' />
          <span className='ml-[-0.5vw] inline-block'>ry</span>
        </Link>
      </div>

      {/* 오른쪽 유저 버튼 */}
      <div className='w-[200px]'>
        <div className='px-4 py-1 bg-background rounded-full items-center justify-center ring ring-gray-300/20 hover:ring-gray-300/60 bg-mainBg flex cursor-pointer'>
          <UserButton />
        </div>
      </div>
    </div>
  );
}
