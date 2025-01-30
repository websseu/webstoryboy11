'use server';

import { signIn, signOut } from '@/auth';
import { IUserSignIn } from '@/lib/types';
import { redirect } from 'next/navigation';
import { connectToDatabase } from '../db';
import User from '../db/models/user.model';

// 로그인(이메일/비밀번호)
export async function signInWithCredentials(user: IUserSignIn) {
  return await signIn('credentials', { ...user, redirect: false });
}

export const SignOut = async () => {
  const redirectTo = await signOut({ redirect: false });
  redirect(redirectTo.redirect);
};

// export async function signOutUser() {
//   const result = await signOut({ redirect: false });
//   redirect(result.url);
// }

export const getAllUsers = async () => {
  try {
    await connectToDatabase();
    const posts = await User.find({}).sort({ createdAt: -1 });
    return posts;
  } catch (error) {
    console.error('게시물 가져오기 오류:', error);
    throw new Error('게시물을 불러오지 못했습니다.');
  }
};
