import { useState } from "react";
import { Prediction } from "../utils/Api";
import { useNavigate } from "react-router-dom";

// import ResultClassification from "./ResultPrediction";
function FormInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const [setPredictionResult] = useState("");
  const navigate = useNavigate();
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await Prediction(searchQuery);
      setPredictionResult(response);
      navigate("/add/prediction");
    } catch (error) {
      console.error("Error fetching prediction:", error);
      // Handle error if needed
    }
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Prediction Words</h1>
            <p className="py-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo doloribus a corporis quia ab? Magnam minus itaque odit recusandae repellat autem tempore animi. Pariatur qui, quam impedit labore accusamus ex?
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Words</span>
                </label>
                <textarea
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                  value={searchQuery}
                  name="text"
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                  type="text"
                />{" "}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent mx-5" onClick={handleSearch}>
                  Prediction
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen mt-5 ">
        <div className="join">
          <form onSubmit={handleSearch}>
            <textarea
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              value={searchQuery}
              name="text"
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              type="text"
            />
            <div className="form-control mt-6">
              <button className="btn btn-accent mx-5" onClick={handleSearch}>
                Prediction
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default FormInput;
