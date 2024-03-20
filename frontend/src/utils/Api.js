import axios from "axios";
const urlEndpoint= import.meta.env.VITE_ENDPOINT
export async function FetchAPI() {
  try {
    const response = await axios.get(`${urlEndpoint}`);
    return response.data.Message; // Assuming you want to return the data from the response
  } catch (error) {
    console.error("Error fetching API:", error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
}

export async function Prediction(text) {
  try {
    const response = await axios.post(
      `${urlEndpoint}/add/prediction?text=${text}`
    );
    return response.data; // Assuming you want to return the data from the response
  } catch (error) {
    console.error("Error fetching Prediction:", error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
}
