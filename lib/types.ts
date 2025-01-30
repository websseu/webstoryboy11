import { z } from 'zod';
import {
  PostInputSchema,
  UserInputSchema,
  UserSignInSchema,
} from './validator';

export interface Post {
  _id: string;
  title: string;
  slug: string;
  category: string;
  subCategory?: string;
  description: string;
  isPublished: boolean;
  author: string;
  images: string[];
  tags: string[];
  numReviews: number;
  numViews: number;
  numLikes: number;
  createdAt: string;
  updatedAt: string;
}

export type MenuItem = {
  name: string;
  href: string;
};
export type TitleItem = {
  category: string;
  title: string;
  text: string;
  desc: string;
  href: string;
  subject: string[];
};

export type Data = {
  headerMenus: MenuItem[];
  adminMenus: MenuItem[];
  pagesTitle: TitleItem[];
  posts: IPostInput[];
  users: IUserInput[];
};

export type IPostInput = z.infer<typeof PostInputSchema>;

export type IUserInput = z.infer<typeof UserInputSchema>;
export type IUserSignIn = z.infer<typeof UserSignInSchema>;
