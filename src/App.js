import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register"element={<LandingPage/>}></Route>
          <Route path="/abc"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
