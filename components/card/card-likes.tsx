import React from 'react';
import { LuHeart } from 'react-icons/lu';

interface likesProps {
  likes: number;
}

export default function CardLikes({ likes }: likesProps) {
  return (
    <span className='likes'>
      <LuHeart />
      <span className='text-[10px] pl-1'>{likes}</span>
    </span>
  );
}
