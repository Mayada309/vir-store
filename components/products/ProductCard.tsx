import { Product } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';

function ProductCard({ product }: { product: Product }) {
  return (
    <li
      key={product.id}
      className='flex justify-center text-lg flex-col p-4 rounded-xl items-center gap-2'
    >
      <Link
        href={{
          pathname: '/single-product',
          query: { id: product.id },
        }}
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={300}
          className='h-80 w-full object-cover bg-cover'
        />
        <p className='text-center'>{product.name}</p>
        <p className='text-center'>{product.price}$</p>
      </Link>
    </li>
  );
}

export default ProductCard;
