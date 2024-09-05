import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;





// https://api.themoviedb.org/3//discover/tv?api_key=8f79bb443f7589ce3d7b5019f7d6c30a&with_networks=213
