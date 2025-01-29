import { z } from 'zod';
import { PostInputSchema } from './validator';

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
  posts: IPostInput[];
  pagesTitle: TitleItem[];
};

export type IPostInput = z.infer<typeof PostInputSchema>;
