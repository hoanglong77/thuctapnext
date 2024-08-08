// components/Slider.js
import React from 'react';
import { FaRegImages } from "react-icons/fa";
import styles from './page.module.css'; 

const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <div className={styles.slideImage}>
            <FaRegImages size={100} /> 
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <button className={styles.controlButton} aria-label="Previous slide">
          &lt; {/* Icon cho nút lùi */}
        </button>
        <button className={styles.controlButton} aria-label="Next slide">
          &gt; {/* Icon cho nút tiến */}
        </button>
      </div>
      <div className={styles.pagination}>
        <span className={styles.paginationDot}></span>
        <span className={styles.paginationDot}></span>
        <span className={styles.paginationDot}></span>
      </div>
    </div>
  );
};

export default Slider;
