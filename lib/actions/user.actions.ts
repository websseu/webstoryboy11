'use server';

import { signIn, signOut } from '@/auth';
import { IUserSignIn, IUserSignUp } from '@/lib/types';
import { redirect } from 'next/navigation';
import { connectToDatabase } from '../db';
import User from '../db/models/user.model';
import { UserSignUpSchema } from '../validator';
import { formatError } from '../utils';
import bcrypt from 'bcryptjs';

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

// 모든 회원 정보 가져오기
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

// CREATE
export async function registerUser(userSignUp: IUserSignUp) {
  try {
    const user = await UserSignUpSchema.parseAsync({
      name: userSignUp.name,
      email: userSignUp.email,
      password: userSignUp.password,
      confirmPassword: userSignUp.confirmPassword,
    });

    await connectToDatabase();
    await User.create({
      ...user,
      password: await bcrypt.hash(user.password, 5),
    });
    return { success: true, message: '회원가입이 성공적으로 이루어졌습니다.' };
  } catch (error) {
    return { success: false, error: formatError(error) };
  }
}
