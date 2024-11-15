import '@/app/globals.css';
import Navbar from '../../components/navbar/Navbar';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReduxProvider from '@/components/global/ReduxProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ReduxProvider>
          <Navbar />
          <main className='max-w-7xl mx-auto '>{children}</main>
          <ToastContainer position='bottom-right' />
        </ReduxProvider>
      </body>
    </html>
  );
}
