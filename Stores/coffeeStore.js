import { decorate, observable } from "mobx";
import axios from "axios";

class CoffeeStore {
  constructor() {
    coffeeshops: null;
    coffeeshop: null;
    loading: true;
  }

  fetchAllCoffeeShops() {
    return axios
      .get("http://coffee.q8fawazo.me/api/?format=json")
      .then(res => res.data)
      .then(shops => {
        this.coffeeshops = shops;
        this.loading = false;
      })
      .catch(err => console.error(err.response));
  }
}
decorate(CoffeeStore, {
  coffeeshops: observable,
  coffeeshop: observable,
  loading: observable
});
const coffeeStore = new CoffeeStore();
coffeeStore.fetchAllCoffeeShops();
export default coffeeStore;
