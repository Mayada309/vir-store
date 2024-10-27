import { Product } from '@/app/types';
import ProductCard from './ProductCard';

function ProductsList({ products }: { products: Product[] }) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </ul>
  );
}

export default ProductsList;
