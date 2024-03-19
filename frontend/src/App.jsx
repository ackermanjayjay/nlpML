import { Routes, Route } from "react-router-dom";
import HomePages from "./assets/views/Homepages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/add/prediction" element={<HomePages/>} ></Route>
        </Routes>
      </>
      );
}

      export default App;
