import axios from "axios"
const youtube = axios.create({
  baseURL: "https://www.youtube.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
