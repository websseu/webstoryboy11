'use client';

import Link from 'next/link';
import { TitleItem } from '@/lib/types';
import { usePathname } from 'next/navigation';

interface CardTitleProps {
  pagesTitle: TitleItem;
}

export default function CardTitle({ pagesTitle }: CardTitleProps) {
  const pathname = usePathname();

  const basePath = `/${pagesTitle.category}`;

  return (
    <>
      <h2 className='text-2xl md:text-3xl font-nexon mb-3'>
        {pagesTitle.title}
      </h2>
      <p className='text-black300 font-nanum mb-2 leading-6 text-sm'>
        {pagesTitle.desc}
      </p>
      <div className='flex gap-1'>
        <Link
          href={basePath}
          className={`subject ${pathname === basePath ? 'red' : ''}`}
        >
          All
        </Link>
        {pagesTitle.subjects.map((subject) => {
          const isActive = pathname === `${basePath}/${subject.href}`;
          return (
            <Link
              key={subject.href}
              href={`${basePath}/${subject.href}`}
              className={`subject ${isActive ? 'red' : ''}`}
            >
              {subject.title}
            </Link>
          );
        })}
      </div>
    </>
  );
}
