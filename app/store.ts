import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './types';

// Define CartState type
interface CartState {
  cartItems: Product[];
  totalPrice: number;
}

// Initial state
const initialState: CartState = {
  cartItems: [],
  totalPrice: 0,
};

// Function to retrieve cart from localStorage with typing
const getCartFromLocalStorage = (): CartState => {
  if (typeof window !== 'undefined') {
    const cartFromLocalStorage = localStorage.getItem('cart');
    if (cartFromLocalStorage) {
      const parsedCart = JSON.parse(cartFromLocalStorage);
      // Ensure the parsedCart matches the expected structure
      if (Array.isArray(parsedCart.cartItems)) {
        return {
          cartItems: parsedCart.cartItems,
          totalPrice: parsedCart.totalPrice || 0,
        };
      }
    }
  }
  return initialState; // Default initial state
};

// Create slice with properly typed state
const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    getTotalCheck: (state) => {
      state.totalPrice = state.cartItems.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0);
    },
    addToCart: (state, { payload }: PayloadAction<Product>) => {
      const product = payload;
      const item = state.cartItems.find((i) => i.id === product.id);

      if (item) {
        item.amount += product.amount; // Update amount if exists
      } else {
        state.cartItems.push(product); // Add new product
      }

      cartSlice.caseReducers.getTotalCheck(state);
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    removeFromCart: (state, { payload }: PayloadAction<Product>) => {
      const product = payload;
      state.cartItems = state.cartItems.filter((i) => i.id !== product.id);
      cartSlice.caseReducers.getTotalCheck(state);
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    updateCart: (
      state,
      action: PayloadAction<{ product: Product; newAmount: string }>
    ) => {
      const { product, newAmount } = action.payload;
      const item = { ...product, amount: Number(newAmount) };
      state.cartItems = state.cartItems.filter((i) => i.id !== product.id);
      state.cartItems.push(item);
      cartSlice.caseReducers.getTotalCheck(state);
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
  },
});

// Export actions
export const {
  addToCart,
  removeFromCart,
  updateCart,
  clearCart,
  getTotalCheck,
} = cartSlice.actions;

// Configure store
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// Export RootState type
export type RootState = ReturnType<typeof store.getState>;
