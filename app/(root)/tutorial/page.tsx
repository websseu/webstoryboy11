import { notFound } from 'next/navigation';
import { TitleItem } from '@/lib/types';
import CardTitle from '@/components/card/card-title';
import data from '@/lib/data';

export default async function TutorialPage() {
  const pagesTitle: TitleItem | undefined = data.pagesTitle.find(
    (page) => page.category === 'tutorial'
  );

  if (!pagesTitle) {
    notFound();
  }

  return (
    <section>
      <CardTitle pagesTitle={pagesTitle} />
    </section>
  );
}
