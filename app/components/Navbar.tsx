import Link from 'next/link';
import logo from '../../images/kiiva.png';
import Image from 'next/image';

type Link = {
  id: number;
  page: string;
  url: string;
};

const links: Link[] = [
  {
    id: 1,
    page: 'products',
    url: '/products',
  },
  {
    id: 2,
    page: 'cart',
    url: '/cart',
  },
];

function Navbar() {
  return (
    <nav className=' text-2xl max-w-7xl mx-auto p-2 flex justify-between '>
      <Link
        href={'/'}
        className='lowercase tracking-wider w-24 text-white px-2'
      >
        <Image src={logo} alt='kiiva' />
      </Link>
      <ul className='flex gap-x-4 items-center '>
        {links.map((link) => {
          return (
            <Link
              href={link.url}
              key={link.id}
              className='capitalize text-slate-500 hover:text-orange-400 transition-colors'
            >
              {link.page}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
