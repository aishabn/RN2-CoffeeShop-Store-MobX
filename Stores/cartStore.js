import { decorate, observable } from "mobx";

class CartStore {
  constructor() {
    items: null;
  }
}
decorate(CartStore, {
  items: observable
});
const cartStore = new CartStore();
export default cartStore;
