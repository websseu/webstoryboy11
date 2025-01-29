'use server';

import { connectToDatabase } from '../db';
import Post from '../db/models/post.model';

// CREATE

// UPDATE

// DELETE

// READ
// 모든 상품 가져오기
export const getAllPosts = async () => {
  try {
    await connectToDatabase();
    const posts = await Post.find({}).sort({ createdAt: -1 });
    return posts;
  } catch (error) {
    console.error('게시물 가져오기 오류:', error);
    throw new Error('게시물을 불러오지 못했습니다.');
  }
};

// 카테고리 별 상품 가져오기
export const getPostsForCategory = async ({
  category,
  limit = 9,
}: {
  category: string;
  limit?: number;
}) => {
  try {
    await connectToDatabase();
    const posts = await Post.find({
      category: category,
      isPublished: true,
    })
      .sort({ createdAt: -1 })
      .limit(limit);
    return posts;
  } catch (error) {
    console.error('게시물 가져오기 오류:', error);
    throw new Error('게시물을 불러오지 못했습니다.');
  }
};
