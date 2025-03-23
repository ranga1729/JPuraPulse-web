import axios from "axios";

const BASE_URL = "https://localhost:44300/api/test"

export const fetchData = async() =>  {
  try {
    const resposne = await axios.get(BASE_URL, {
      withCredentials: true,
    })
    console.log(resposne.data.message)
    return resposne.data.message
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};