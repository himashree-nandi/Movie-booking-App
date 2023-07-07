import axios from "axios";
import { TOKEN } from "../utils/constants";
const BASE_URL = process.env.REACT_APP_MBA_BACKEND_URL;
export const getMovieById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/mba/api/v1/movies/${id}`, {
      headers: { "x-access-token": localStorage.getItem(TOKEN) },
    });
    return response.data
  } catch (err) {
    console.log(err)
  }
};
