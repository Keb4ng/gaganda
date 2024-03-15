import React from "react";
import Homepage from "./pages/Homepage";
import Header from "../src/components/Header";
import Footer from "./components/Footer";
import ShopAll from "./pages/ShopAll";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextApiProvider } from "./context/DataContext/ContextApi";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <ContextApiProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/shop" element={<ShopAll />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
          <Footer />
        </Router>
      </ContextApiProvider>
    </div>
  );
}

export default App;
