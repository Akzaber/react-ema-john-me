const addToLs = (id) => {
  let shoppingCart;

  // get the shopping cart from the local storage..
  const getStoredCart = localStorage.getItem('shopping-cart');
  if(getStoredCart){
    shoppingCart = JSON.parse(getStoredCart);
  }
  else{
    shoppingCart = {};
  }

  // add quantity---
  const quantity = shoppingCart[id];
  if(quantity){
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  else{
    shoppingCart[id] = 1;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

export {addToLs};
