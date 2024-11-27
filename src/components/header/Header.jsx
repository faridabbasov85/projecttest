import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigation = useNavigate();

  const goBasket = () => {
    navigation("/basket");
  };
  const goWishlist = () => {
    navigation("/wishlist");
  };
  return (
    <div>
      <div className={styles.headOne}>
        <div className={styles.headTwo}>
          <i class="fa-solid fa-phone"></i>
          <a href="">+021-95-51-84</a>
          <i class="fa-solid fa-envelope"></i>
          <a href="">email@email.com</a>
          <i class="fa-solid fa-location-dot"></i>
          <a href="">1734 Stonecoal Road</a>
        </div>
        <div className={styles.headTwo}>
          <i class="fa-solid fa-dollar-sign"></i>
          <a href="">USD</a>
          <i class="fa-solid fa-user"></i>
          <a href="">My Account</a>
        </div>
      </div>
      <header>
        <div>
          <img
            src="	https://preview.colorlib.com/theme/electro/img/logo.png"
            alt=""
          />
        </div>
        <div>
          <form action="">
            <select name="" id="" className={styles.select}>
              <option value="0">All Categories</option>
              <option value="1">Category 01</option>
              <option value="1">Category 02</option>
            </select>
            <input
              className={styles.input}
              type="text"
              placeholder="Search here"
            />
            <button className={styles.headButton}>Search</button>
          </form>
        </div>
        <div className={styles.headIcon}>
          <i onClick={goWishlist}  class="fa-solid fa-heart"></i>
          <i onClick={goBasket} class="fa-solid fa-cart-shopping"></i>
        </div>
      </header>
    </div>
  );
};

export default Header;
