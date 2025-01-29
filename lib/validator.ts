import { z } from 'zod';

// 글쓰기 유효성 검사
export const PostInputSchema = z.object({
  title: z.string().min(3, '제목은 최소 3자 이상이어야 합니다.'),
  slug: z.string().min(3, '슬러그는 최소 3자 이상이어야 합니다.'),
  category: z.string().min(1, '카테고리는 필수입니다.'),
  subCategory: z.string().min(1, '서브카테고리는 필수입니다.'),
  description: z.string().min(1, '설명은 필수입니다.'),
  isPublished: z.boolean().default(true),
  author: z.string().min(1, '저자는 필수입니다.'),
  images: z.array(z.string()).min(1, '이미지는 한 장 이상 필수입니다.'),
  tags: z.array(z.string()).default([]),
  reviews: z.array(z.string()).default([]),
  numReviews: z.coerce
    .number()
    .int()
    .nonnegative('리뷰 수는 0 이상의 정수여야 합니다.')
    .default(0),
  numViews: z.coerce
    .number()
    .int()
    .nonnegative('조회 수는 0 이상의 정수여야 합니다.')
    .default(0),
  numLikes: z.coerce
    .number()
    .int()
    .nonnegative('좋아요 수는 0 이상의 정수여야 합니다.')
    .default(0),
});
