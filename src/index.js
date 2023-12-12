import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ProductList from "./components/products/ProductList";
import LoginForm from "./components/authentication/LoginForm";
import RegisterForm from "./components/authentication/RegisterForm";
import Shop from "./components/products/Shop";
import Contact from "./components/common/Contact";

const App = () => {
  return (
    <Router>
      <React.StrictMode>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
        <Footer />
      </React.StrictMode>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
