import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

let original_products = [];

function Shop() {
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

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

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
      <div className="select-category">
        <button
          className="select-category-btn"
          onClick={() => setUrl("http://localhost:3000/products")}
        >
          All
        </button>
        <button
          className="select-category-btn"
          onClick={() =>
            setUrl("http://localhost:3000/products?category=Mobiles")
          }
        >
          Mobiles
        </button>
        <button
          className="select-category-btn"
          onClick={() => setUrl("http://localhost:3000/products?category=TVs")}
        >
          Televisions
        </button>
        <button
          className="select-category-btn"
          onClick={() =>
            setUrl("http://localhost:3000/products?category=Tablets")
          }
        >
          Tablets
        </button>
        <button
          className="select-category-btn"
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
          {shuffleArray(products)
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>
      </div>

      <hr className="select-category-hr" />

      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="pagination-btn"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Shop;
