import React from "react";
import Homepage from "./pages/Homepage";
import Header from "../src/components/Header";
import Footer from "./components/Footer";
import ShopAll from "./pages/ShopAll";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextApiProvider } from "./context/DataContext/ContextApi";
import Product from "./pages/Product";
import Collections from "./pages/Collections";
import LoginSignup from "./pages/Login-Signup";
import Account from "./pages/Account";

function App() {
  return (
    <div className="App">
      <Router>
        <ContextApiProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/shop" element={<ShopAll />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login-signup" element={<LoginSignup />} />
            <Route path="/collections" element={<Collections />} />
            <Route private path="/account" element={<Account />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
          <Footer />
        </ContextApiProvider>
      </Router>
    </div>
  );
}

export default App;
