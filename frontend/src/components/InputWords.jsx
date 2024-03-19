import { useState, Suspense } from "react";
import { Prediction } from "../utils/Api";
import { useNavigate} from "react-router-dom";

// import ResultClassification from "./ResultPrediction";
function FormInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const [predictionResult, setPredictionResult] = useState("");
    const navigate = useNavigate()
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await Prediction(searchQuery);
      setPredictionResult(response);
      navigate("/add/prediction")

    } catch (error) {
      console.error("Error fetching prediction:", error);
      // Handle error if needed
    }
  };
  return (
    <>
      <div className="join">
        <form onSubmit={handleSearch} >
          <textarea
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            value={searchQuery}
            name="text"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            type="text"
          />
          <button
            className="btn btn-accent join-item rounded-r-full"
            onClick={handleSearch}
          >
            Prediction
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center h-screen mt-5 mb-5">
        {searchQuery != null ? (
          //     <ResultClassification result={searchResults} />
          <Suspense fallback={<div>loading</div>}>
            <div className="flex justify-center items-center h-screen mt-5 mb-5">
              <input
                className="input input-bordered"
                value={predictionResult}
                readOnly
              />
            </div>
          </Suspense>
        ) : null}
      </div>
    </>
  );
}
export default FormInput;
