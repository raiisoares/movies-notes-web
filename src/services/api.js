import axios from "axios";

export const api = axios.create({
    baseURL: "https://movies-notes-exp-api.onrender.com"
});

