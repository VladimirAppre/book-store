import updateShopingCart from "./shopping-cart";
import updateBookList from "./book-list";

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShopingCart(state, action)
  };
};

export default reducer;