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
      .limit(limit)
      .lean();
    return posts.map((post) => ({
      _id: post._id,
      title: post.title,
      slug: post.slug,
      category: post.category || '',
      subCategory: post.subCategory || '',
      description: post.description || '',
      isPublished: post.isPublished || true,
      author: post.author || '',
      images: post.images || [],
      tags: post.tags || [],
      numReviews: post.numReviews || 0,
      numViews: post.numViews || 0,
      numLikes: post.numLikes || 0,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error('게시물 가져오기 오류:', error);
    throw new Error('게시물을 불러오지 못했습니다.');
  }
};

// 서브카테고리 별 상품 가져오기
export const getPostsForSubCategory = async ({
  subCategory,
  limit = 9,
}: {
  subCategory: string;
  limit?: number;
}) => {
  try {
    await connectToDatabase();
    const posts = await Post.find({
      subCategory: subCategory,
      isPublished: true,
    })
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();
    return posts.map((post) => ({
      _id: post._id,
      title: post.title,
      slug: post.slug,
      category: post.category || '',
      subCategory: post.subCategory || '',
      description: post.description || '',
      isPublished: post.isPublished || true,
      author: post.author || '',
      images: post.images || [],
      tags: post.tags || [],
      numReviews: post.numReviews || 0,
      numViews: post.numViews || 0,
      numLikes: post.numLikes || 0,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error('게시물 가져오기 오류:', error);
    throw new Error('게시물을 불러오지 못했습니다.');
  }
};
