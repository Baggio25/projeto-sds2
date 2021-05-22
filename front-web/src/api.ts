import axios from "axios";

const API_URL = 'https://rbaggio-sds2-api.herokuapp.com';

export function fetchProducts() {
  return axios(`${API_URL}/products`);
}