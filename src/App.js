
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Getfoodnutration from "./components/Getfoodnutration";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ApiState from "./context/apiState";

function App() {
  return (
    <ApiState>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getfoodnutration/:id" element={<Getfoodnutration  />} />

      </Routes>
    </Router>
    </ApiState>
  );
}

export default App;
