import "./App.css";
import Home from "./pages/home/Home";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
