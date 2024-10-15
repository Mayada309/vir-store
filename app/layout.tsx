import './globals.css';
import Navbar from './components/Navbar';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kiiva',
  description: 'best local brand',
  keywords: 'Clothes, Hoodies, t-shirt, Women, Men,',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='max-w-7xl mx-auto '>{children}</main>
      </body>
    </html>
  );
}
