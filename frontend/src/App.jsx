import { Routes, Route } from "react-router-dom";
import HomePages from "./views/Homepages";
import FormInput from "./components/InputWords";
import Navigation from "./components/Navbar";
function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/add/prediction" element={<FormInput />}></Route>
      </Routes>
    </>
  );
}

export default App;
