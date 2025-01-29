import data from '@/lib/data';
import { connectToDatabase } from '.';
import Post from './models/post.model';
import { cwd } from 'process';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(cwd());

const main = async () => {
  try {
    const { posts } = data;
    await connectToDatabase(process.env.MONGODB_URI);

    await Post.deleteMany();
    const createdPosts = await Post.insertMany(posts);

    console.log({
      createdPosts,
      message: 'Seeded database successfully',
    });
    process.exit(0);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to seed database');
  }
};

main();
