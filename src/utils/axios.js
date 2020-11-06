import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
