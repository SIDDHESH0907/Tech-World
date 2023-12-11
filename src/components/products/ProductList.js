import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

let original_products = [];

function ProductList() {
  let [products, setProducts] = useState([]);
  let [url, setUrl] = useState("http://localhost:3000/products");

  const fetchProducts = async () => {
    let response = await fetch(url);
    let data = await response.json();
    original_products = data;
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, [url]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const pageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <hr className="select-category-hr" />
      <div className="select-category">
        <button
          className="left"
          onClick={() => setUrl("http://localhost:3000/products")}
        >
          All
        </button>
        <button
          onClick={() =>
            setUrl("http://localhost:3000/products?category=Smartphones")
          }
        >
          Smartphones
        </button>
        <button
          onClick={() =>
            setUrl("http://localhost:3000/products?category=Televisions")
          }
        >
          Televisions
        </button>
        <button
          onClick={() =>
            setUrl("http://localhost:3000/products?category=Tablets")
          }
        >
          Tablets
        </button>
        <button
          className="right"
          onClick={() =>
            setUrl("http://localhost:3000/products?category=Laptops")
          }
        >
          Laptops
        </button>
      </div>
      <hr className="select-category-hr" />

      <div className="list-container">
        <div className="list-grid">
          {products
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>
      </div>

      <hr className="select-category-hr" />

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <hr className="select-category-hr" />
    </>
  );
}

export default ProductList;
