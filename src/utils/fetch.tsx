import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchFromAPI = async (url: string, count?: number) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, {
    params: {
      maxResults: count || 50,
    },
    headers: {
      "X-RapidAPI-Key": "68d6a112f4msh6a8911758a3ada2p1eb232jsn4d58c88af0f6",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  });

  return data;
};
