import axios from "axios";
import { TOKEN } from "../utils/constants";
const BASE_URL = process.env.REACT_APP_MBA_BACKEND_URL;
export const getAllMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/mba/api/v1/movies`, {
      headers: { "x-access-token": localStorage.getItem(TOKEN) },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
