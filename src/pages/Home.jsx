import React from "react";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero_text}>
        <h2>Food Warehouse</h2>
        <p>Best Food in Town</p>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default Home;
