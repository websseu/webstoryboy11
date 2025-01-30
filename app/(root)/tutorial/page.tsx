import { notFound } from 'next/navigation';
import { TitleItem } from '@/lib/types';
import { getPostsForCategory } from '@/lib/actions/post.actions';
import data from '@/lib/data';
import CardTitle from '@/components/card/card-title';
import CardPage from '@/components/card/card-page';

export default async function TutorialPage() {
  const pagesTitle: TitleItem | undefined = data.pagesTitle.find(
    (page) => page.category === 'tutorial'
  );

  if (!pagesTitle) {
    notFound();
  }

  const posts = await getPostsForCategory({
    category: 'tutorial',
    limit: 9,
  });

  return (
    <section>
      <CardTitle pagesTitle={pagesTitle} />
      <CardPage posts={posts} />
    </section>
  );
}
