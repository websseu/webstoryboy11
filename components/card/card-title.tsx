import Link from 'next/link';
import { TitleItem } from '@/lib/types';

interface CardTitleProps {
  pagesTitle: TitleItem;
}

export default function CardTitle({ pagesTitle }: CardTitleProps) {
  return (
    <>
      <h2 className='text-2xl md:text-3xl font-nexon mb-3'>
        {pagesTitle.title}
      </h2>
      <p className='text-black300 font-nanum mb-2 leading-6 text-sm'>
        {pagesTitle.desc}
      </p>
      <div className='flex gap-1'>
        <Link href='/tutorial' className='subject'>
          All
        </Link>
        {pagesTitle.subject.map((subject) => (
          <Link
            key={subject}
            href={`/tutorial/${encodeURIComponent(subject)}`}
            className='subject'
          >
            {subject}
          </Link>
        ))}
      </div>
    </>
  );
}
