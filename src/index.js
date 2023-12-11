import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ProductList from "./components/products/ProductList"
import LoginForm from "./components/authentication/LoginForm";
import RegisterForm from "./components/authentication/RegisterForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    {/* <LoginForm/> */}
    {/* <RegisterForm /> */}
    <ProductList/>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
