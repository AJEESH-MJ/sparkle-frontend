import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./mainComponents/Navbar/navbar";
import Footer from "./mainComponents/Footer/footer"
import Home from "./pages/Home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/sparkle-frontend/" element={<Home /> }/>
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
