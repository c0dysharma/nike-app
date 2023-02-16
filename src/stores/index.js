import { create } from "zustand";
import products from "../data/products";

const useProductsStore = create((set) => ({
  products: products,
  selectedProduct: null,
  selectProduct: (productId) =>
    set((state) => ({
      selectedProduct: state.products.find((item) => item.id == productId),
    })),
}));

const useCartStore = create((set, get) => ({
  cartItems: [],
  deliveryCharges: 15,
  deliveryFreeAfter: 200,
  getSubTotal: () =>
    get().cartItems.reduce(
      (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
      0
    ),
  getDeliveryCharges: () =>
    get().getSubTotal() >= get().deliveryFreeAfter ? 0 : get().deliveryCharges,
  addCartItem: (product) => {
    const cartItem = get().cartItems.find((item) => item.product === product);

    // when product is alredy there increase quantity
    if (cartItem) {
      const cartItems = get().cartItems.map((item) => {
        if (item.product === product) item.quantity += 1;
        return item;
      });
      return set((_) => ({ cartItems }));
    }
    // if not add to cart
    else
      return set((state) => ({
        cartItems: [...state.cartItems, { product, quantity: 1 }],
      }));
  },
  changeQuantity: (product, value) => {
    const newQuantity =
      get().cartItems.find((item) => item === product).quantity + value;

    // remove from list
    if (newQuantity <= 0) {
      return set((state) => ({
        cartItems: state.cartItems.filter((item) => item != product),
      }));
    }

    // update quantity
    else {
      const cartItems = get().cartItems.map((item) => {
        if (item === product) item.quantity = newQuantity;
        return item;
      });
      return set((_) => ({ cartItems }));
    }
  },
}));

export { useProductsStore, useCartStore };
