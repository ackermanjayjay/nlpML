import axios from "axios";

export async function FetchAPI() {
  try {
    const response = await axios.get("http://127.0.0.1:8000/");
    return response.data.Message; // Assuming you want to return the data from the response
  } catch (error) {
    console.error("Error fetching API:", error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
}

export async function Prediction(text) {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/add/prediction?text=${text}`
    );
    return response.data; // Assuming you want to return the data from the response
  } catch (error) {
    console.error("Error fetching Prediction:", error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
}
