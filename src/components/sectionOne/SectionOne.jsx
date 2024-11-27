import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../../redux/reducers/productsSlice";
import styles from "./SectionOne.module.css";

const SectionOne = () => {
  const products = useSelector((state) => state.products.products) || [];
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  if (loading) return <p>Yüklənir...</p>;

  if (error) return <p>Xəta baş verdi</p>;

  const lastIndexProducts = currentPage * productsPerPage;
  const firstIndexProducts = lastIndexProducts - productsPerPage;
  const currentProducts = products.slice(firstIndexProducts, lastIndexProducts);
  const pages = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.main}>
      <h1>NEW PRODUCTS</h1>
      <div className={styles.pages}>
        {pages.map((page) => (
          <button key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        ))}
      </div>

      <div className={styles.products}>
        {currentProducts.map((product) => (
          <div className={styles.sect} key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <p className={styles.category}>{product.category}</p>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.price}>${product.price}</p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <div className={styles.sectIcon}>
              <i  class="fa-solid fa-heart"></i>
              <i  class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
