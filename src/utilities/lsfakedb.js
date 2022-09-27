// USe local Storage to manage Cart Data;

const addToDb = id => {
  let shoppingCart = {};

  // get cart from local Storage;
  const storedCart = localStorage.getItem('shopping-cart');
  if(storedCart){
    shoppingCart = JSON.parse(storedCart);
  }

  // set Quantity;
  const quantity = shoppingCart[id];
  if(quantity){
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  else{
    shoppingCart[id] = 1;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

export {addToDb}