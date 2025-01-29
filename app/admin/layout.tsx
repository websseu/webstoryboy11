import Footer from '@/components/footer';
import Header from '@/components/header';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className='admin__container'>{children}</main>
      <Footer />
    </div>
  );
}
