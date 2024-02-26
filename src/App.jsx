import { Home } from "./pages/Home";
import { Market } from "./pages/Market"
import "./style/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
