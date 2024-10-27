import { Product } from './app/types';
import image1 from './images/product-1.jpg';
import image2 from './images/product-2.jpg';
import image3 from './images/product-3.jpg';
import image4 from './images/product-4.jpg';
import image5 from './images/product-5.jpg';
import image6 from './images/product-6.jpg';

export const products: Product[] = [
  {
    id: 1,
    name: "Men's Classic White T-Shirt",
    price: 19.99,
    description:
      'A timeless classic white t-shirt made from 100% cotton. Soft, comfortable, and perfect for any casual outfit.',
    imageUrl: image1,
    category: 'Clothing',
    sizeOptions: ['S', 'M', 'L', 'XL'],
    color: 'White',
    stock: 50,
    amount: 0,
    selectedSize: '',
    featured: false,
  },
  {
    id: 2,
    name: "Women's Graphic Tee",
    price: 24.99,
    description:
      'Stylish women’s graphic t-shirt featuring a trendy design. Made with a blend of cotton and polyester for maximum comfort.',
    imageUrl: image2,
    category: 'Clothing',
    sizeOptions: ['XS', 'S', 'M', 'L'],
    color: 'Black',
    stock: 30,
    amount: 0,
    selectedSize: '',
    featured: true,
  },
  {
    id: 3,
    name: 'Unisex Vintage Washed T-Shirt',
    price: 29.99,
    description:
      'Unisex vintage washed t-shirt with a relaxed fit. Available in multiple colors and perfect for a laid-back look.',
    imageUrl: image3,
    category: 'Clothing',
    sizeOptions: ['M', 'L', 'XL', 'XXL'],
    color: 'Gray',
    stock: 40,
    amount: 0,
    selectedSize: '',
    featured: false,
  },
  {
    id: 4,
    name: 'Kids Rainbow T-Shirt',
    price: 15.99,
    description:
      'Colorful rainbow t-shirt for kids. Made from soft cotton and perfect for everyday wear.',
    imageUrl: image4,
    category: 'Clothing',
    sizeOptions: ['S', 'M', 'L'],
    color: 'Rainbow',
    stock: 20,
    amount: 0,
    selectedSize: '',
    featured: true,
  },
  {
    id: 5,
    name: "Men's Striped Polo",
    price: 34.99,
    description:
      'Elegant striped polo shirt for men. Made from breathable fabric for a comfortable fit.',
    imageUrl: image5,
    category: 'Clothing',
    sizeOptions: ['M', 'L', 'XL', 'XXL'],
    color: 'Blue',
    stock: 25,
    amount: 0,
    selectedSize: '',
    featured: false,
  },
  {
    id: 6,
    name: "Women's Floral Blouse",
    price: 39.99,
    description:
      'Beautiful floral blouse for women. Lightweight and perfect for summer outings.',
    imageUrl: image6,
    category: 'Clothing',
    sizeOptions: ['XS', 'S', 'M', 'L'],
    color: 'Floral',
    stock: 15,
    amount: 0,
    selectedSize: '',
    featured: true,
  },
];
