import { notFound } from 'next/navigation';
import { TitleItem } from '@/lib/types';
import CardTitle from '@/components/card/card-title';
import data from '@/lib/data';
import CardPage from '@/components/card/card-page';
import { getPostsForCategory } from '@/lib/actions/post.actions';

export default async function ReferencePage() {
  const pagesTitle: TitleItem | undefined = data.pagesTitle.find(
    (page) => page.category === 'reference'
  );

  if (!pagesTitle) {
    notFound();
  }

  const posts = await getPostsForCategory({
    category: 'reference',
    limit: 9,
  });

  return (
    <section>
      <CardTitle pagesTitle={pagesTitle} />
      <CardPage posts={posts} />
    </section>
  );
}
