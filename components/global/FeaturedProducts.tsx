import { products } from '@/data';
import ProductsList from '../products/ProductsList';

function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <div className='mt-4 pt-4 text-2xl'>
      <h2 className='capitalize text-slate-700 font-bold p-2'>
        featured products
      </h2>
      <ProductsList products={featuredProducts} />
    </div>
  );
}

export default FeaturedProducts;
