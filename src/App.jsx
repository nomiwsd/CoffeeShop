import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./components/homepage/Homepage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Single_product from "./components/singleproduct/Single_product";
function App() {
  
  return (
    <div className="App text-[#555]">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/singleproduct" element={<Single_product />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;