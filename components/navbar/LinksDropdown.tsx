import Link from 'next/link';

import { type  NavLink} from '@/app/types';

const links: NavLink[] = [
  {
    id: 1,
    page: 'products',
    url: '/products',
  },
  // {
  //   id: 2,
  //   page: 'cart',
  //   url: '/cart',
  // },
];

function LinksDropdown() {
  return (
    <div>
      <ul className='flex gap-x-4 items-center '>
        {links.map((link) => {
          return (
            <Link
              href={link.url}
              key={link.id}
              className='capitalize font-semibold text-slate-500 hover:text-orange-400 transition-colors'
            >
              {link.page}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default LinksDropdown;
