import React from 'react';

interface CardTagsProps {
  tags: string[];
}

export default function CardTags({ tags }: CardTagsProps) {
  return (
    <>
      {tags.map((tag) => (
        <span key={tag} className='tags'>
          {tag}
        </span>
      ))}
    </>
  );
}
