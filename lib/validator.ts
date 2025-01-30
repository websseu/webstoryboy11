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

// 공통요소
const UserName = z
  .string()
  .min(2, { message: '사용자 이름은 최소 2자 이상이어야 합니다.' })
  .max(15, { message: '사용자 이름은 최대 15자까지 가능합니다.' });
const Password = z
  .string()
  .min(5, { message: '비밀번호는 최소 5자 이상이어야 합니다.' })
  .max(30, { message: '비밀번호는 최대 30자까지 가능합니다.' });
// .regex(/[A-Za-z]/, {
//   message: '비밀번호에는 최소 하나의 영문자가 포함되어야 합니다.',
// })
// .regex(/[0-9]/, {
//   message: '비밀번호에는 최소 하나의 숫자가 포함되어야 합니다.',
// })
// .regex(/[!@#$%^&*]/, {
//   message: '비밀번호에는 최소 하나의 특수문자(!@#$%^&*)가 포함되어야 합니다.',
// });
const Email = z
  .string()
  .min(1, '이메일은 필수 입력 사항입니다.')
  .email('올바른 이메일 형식이 아닙니다.');

// 회원가입
export const UserInputSchema = z.object({
  name: UserName,
  password: Password,
  email: Email,
  emailVerified: z.boolean(),
  image: z.string().optional(),
  phone: z.string().optional(),
  role: z.string().min(1, '역할은 필수 입력 사항입니다.'),
  visitCount: z.number().int().default(0),
});

// 로그인
export const UserSignInSchema = z.object({
  email: Email,
  password: Password,
});

// 회원가입
export const UserSignUpSchema = UserSignInSchema.extend({
  name: UserName,
  confirmPassword: Password,
}).refine((data) => data.password === data.confirmPassword, {
  message: '패스워드가 일치하지 않습니다.',
  path: ['confirmPassword'],
});
