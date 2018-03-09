import { API_GOOGLE_BOOK } from "../services/constant";
import axios from "axios";

const searchBooks = (queryTitle) => {
    console.log(queryTitle);
    
    return axios.get(`${API_GOOGLE_BOOK}?q=${queryTitle}`);
}

export default {
    searchBooks
}
