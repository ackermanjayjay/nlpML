import { useState, useEffect } from "react";
import { FetchAPI } from "../../utils/Api";
import FormInput from "../../components/InputWords";

function HomePages() {
  const [getApi, setApi] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await FetchAPI();
        setApi(response);
      } catch (error) {
        console.error("Error fetching API:", error);
        // Handle error if needed
      }
    }
    fetchData();
  }, []);
  console.log(getApi);
  return (
    <>
      <table className="table container">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {getApi.length > 0 ? (
            getApi.map((value, index) => (
              <tr key={index}>
                <th>{value.id}</th>
                <th>{value.text}</th>
                <th>{value.prediction}</th>
              </tr>
            ))
          ) : (
            <th colSpan="3">No data available</th>
          )}
        </tbody>
      </table>
      <div className="flex justify-center items-center h-screen mt-5 ">
        <FormInput />
      </div>
    </>
  );
}

export default HomePages;
