import Link from 'next/link';

import logo from '../../images/kiiva.png';
import Image from 'next/image';

function Logo() {
  return (
    <Link href={'/'} className='w-24 px-2'>
      <Image src={logo} alt='kiiva' />
    </Link>
  );
}

export default Logo;
