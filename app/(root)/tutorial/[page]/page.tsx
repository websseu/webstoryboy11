import { notFound } from 'next/navigation';
import { getPostsForSubCategory } from '@/lib/actions/post.actions';
import data from '@/lib/data';
import CardPage from '@/components/card/card-page';
import CardTitle from '@/components/card/card-title';

export default async function TutorialSubPage({
  params,
}: {
  params: Promise<{
    page: string;
  }>;
}) {
  const { page } = await params;

  const pagesTitle = data.pagesTitle.find(
    (page) => page.category === 'tutorial'
  );

  const subject = data.pagesTitle
    .flatMap((item) => item.subjects)
    .find((subject) => subject.href === page);

  if (!subject || !pagesTitle) {
    notFound();
  }

  const subposts = await getPostsForSubCategory({
    subCategory: subject.title,
    limit: 10,
  });

  return (
    <section>
      <CardTitle pagesTitle={pagesTitle} />
      <CardPage posts={subposts} />
    </section>
  );
}
