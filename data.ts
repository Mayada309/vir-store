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
    name: 'Off the Roots & Culture Graphic T-Shirt',
    price: 19.99,
    description:
      "A modern white t-shirt featuring a bold graphic design with red floral elements framed in blue. The 'Off the Roots & Culture' slogan gives it an urban and artsy touch, perfect for casual, everyday wear.",
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
    name: 'Traveller Adventure Graphic Tee',
    price: 24.99,
    description:
      "An adventurous graphic t-shirt with forest-green mountain prints and the words 'Adventure' and 'Journey.' The design emphasizes living in the moment, perfect for outdoor lovers and travel enthusiasts.",
    imageUrl: image2,
    category: 'Clothing',
    sizeOptions: ['XS', 'S', 'M', 'L'],
    color: 'White',
    stock: 30,
    amount: 0,
    selectedSize: '',
    featured: true,
  },
  {
    id: 3,
    name: 'Whale Abstract T-Shirt',
    price: 29.99,
    description:
      'A clean, white unisex t-shirt featuring an abstract whale illustration. This nature-inspired design offers a modern, minimalistic style perfect for animal lovers and fans of artistic prints.',
    imageUrl: image3,
    category: 'Clothing',
    sizeOptions: ['M', 'L', 'XL', 'XXL'],
    color: 'White',
    stock: 40,
    amount: 0,
    selectedSize: '',
    featured: false,
  },
  {
    id: 4,
    name: 'Enjoy the Breeze Graphic T-Shirt',
    price: 15.99,
    description:
      "A relaxed-fit t-shirt with tropical palm trees, flowers, and a scenic sunset illustration. The cheerful text 'Enjoy the Breeze' makes it a great option for vacations or warm summer days.",
    imageUrl: image4,
    category: 'Clothing',
    sizeOptions: ['S', 'M', 'L'],
    color: 'White',
    stock: 20,
    amount: 0,
    selectedSize: '',
    featured: true,
  },
  {
    id: 5,
    name: 'The Beatles Abbey Road T-Shirt',
    price: 34.99,
    description:
      "A white t-shirt featuring the iconic 'Abbey Road' album cover by The Beatles. A must-have for music enthusiasts, blending pop-culture history with a timeless design.",
    imageUrl: image5,
    category: 'Clothing',
    sizeOptions: ['M', 'L', 'XL', 'XXL'],
    color: 'White',
    stock: 25,
    amount: 0,
    selectedSize: '',
    featured: false,
  },
  {
    id: 6,
    name: 'View from the Hotel Graphic T-Shirt',
    price: 39.99,
    description:
      'A cityscape-themed t-shirt featuring a scenic hotel view of modern skyscrapers. This relaxed-fit shirt is perfect for travelers who appreciate urban aesthetics.',
    imageUrl: image6,
    category: 'Clothing',
    sizeOptions: ['XS', 'S', 'M', 'L'],
    color: 'White',
    stock: 15,
    amount: 0,
    selectedSize: '',
    featured: true,
  },
];
