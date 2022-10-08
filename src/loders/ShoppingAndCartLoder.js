import { storedCart } from "../utilities/lsfakedb";

export const shoppingAndCartLoder = async() => {
  // get products
  const productsData = await fetch('products.json');
  const products = await productsData.json();

  // get Cart
  const getStoredCart = storedCart();
  const initialCart = [];
  for(const id in getStoredCart){
    const addedProduct = products.find(product => product.id === id);
    if(addedProduct){
      const quantity = getStoredCart[id];
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }
  return {products: products, initialCart: initialCart};
}