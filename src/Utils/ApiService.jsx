import axios from "axios";

const ApiService = axios.create({
  baseURL: "https://667d7f6f297972455f655c03.mockapi.io",

  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiService;
