import axios from "axios";

export const instance = axios.create({
  baseURL: "https://task-api-eight-flax.vercel.app/",
});
