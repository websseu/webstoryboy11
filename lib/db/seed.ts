import data from '@/lib/data';
import { connectToDatabase } from '.';
import { cwd } from 'process';
import { loadEnvConfig } from '@next/env';
import Post from './models/post.model';
import User from './models/user.model';

loadEnvConfig(cwd());

const main = async () => {
  try {
    const { posts, users } = data;
    await connectToDatabase(process.env.MONGODB_URI);

    await Post.deleteMany();
    const createdPosts = await Post.insertMany(posts);

    await User.deleteMany();
    const createdUser = await User.insertMany(users);

    console.log({
      createdPosts,
      createdUser,
      message: 'Seeded database successfully',
    });
    process.exit(0);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to seed database');
  }
};

main();
