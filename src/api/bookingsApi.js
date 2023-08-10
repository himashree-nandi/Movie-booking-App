import axios from "axios";
import { TOKEN } from "../utils/constants";

const BASE_URL = process.env.REACT_APP_MBA_BACKEND_URL;
export const bookingsApi = async (user) => {
  try {
    const response = await axios.get(`${BASE_URL}/mba/api/v1/bookings`, {
      headers: { "x-access-token": localStorage.getItem(TOKEN) },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createBooking = async (bookingRequest) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/mba/api/v1/bookings`,
      bookingRequest,
      {
        headers: { "x-access-token": localStorage.getItem(TOKEN) },
      }
    );
    return response
  } catch (err) {
    console.log(err);
  }
};
export const updateBookingsById = async (bookingId, updatedData) => {
  try {
    const res = await axios.put(
      `${BASE_URL}/mba/api/v1/bookings/${bookingId}`,
      updatedData,
      {
        headers: {
          "x-access-token": localStorage.getItem(TOKEN),
        },
      }
    );

    return res;
  } catch (err) {
    console.log(err);
  }
};

