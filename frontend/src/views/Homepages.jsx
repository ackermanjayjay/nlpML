import { useState, useEffect } from "react";
import { FetchAPI } from "../utils/Api";
import { Link } from "react-router-dom";
import logo from "../assets/scikit-learn.png"
import introLogo from "../assets/Mad-NLP.png"

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
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={introLogo}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Mad NLP Email Spam Detection</h1>
            <p className="py-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit laudantium nisi alias inventore, debitis
              voluptatibus, animi labore unde, iusto quas doloribus blanditiis
              eum ratione aliquid perferendis porro expedita tempora similique.
            </p>
            <Link to={"/add/prediction"} className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      
      <table className="table container">
        <thead>
          <tr>
            <th>Id</th>
            <th>Text</th>
            <th>Classification</th>
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
    </>
  );
}

export default HomePages;
