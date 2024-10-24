import axios from "axios";
const Api_Key = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: `https://v6.exchangerate-api.com/v6/${Api_Key}`,
});

// we need to crate a  get request
export const currencyConverter = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};
