import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer/footer';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="overflow-auto">{children}</main>
      <Footer />
    </>
  );
}
