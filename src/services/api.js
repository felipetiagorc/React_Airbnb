import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:3333"
});

/* 
Interceptors do Axios, intercepta uma requisição request 
verifica se existe um token no localStorage,
adiciona o Header de Authorization na request.
Permite acesso a páginas que precisam de autenticação
*/

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
