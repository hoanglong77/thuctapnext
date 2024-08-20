"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./page.module.css";
import { FaFacebookSquare, FaYoutube, FaTwitter } from "react-icons/fa";
import { ClassItem } from '../home/data';

const Home: React.FC = () => {
  const [classes, setClasses] = useState<ClassItem[]>([]);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-pro.teklearner.com/class/v1/get-list-class?class_code=&skip=0&limit=16"
        );
        setClasses(response.data.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    
    <>
     <section className={styles.newArrivals}>
        <div className={styles.header}>
          <h2>New Arrivals</h2>
          <a className={styles.sellAll} href="#">
            Sell All
          </a>
        </div>
        <div className={styles.cards}>
          {/* Top Row */}
          <div className={`${styles.card} ${styles.largeCard}`}>
            <Image
              src="https://via.placeholder.com/600x400"
              alt="Shop Now"
              width={600}
              height={400}
              layout="responsive"
            />
            <div className={styles.cardContent}>
              <button className={styles.shopNow}>Shop Now</button>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              src="https://via.placeholder.com/300x250"
              alt="Product"
              width={300}
              height={200}
              layout="responsive"
            />
            <div className={styles.cardInfo}>
              <h3>Product name Here </h3>
              <p>Brand Name</p>
              <div className={styles.priceContainer}>
                <p className={styles.price}>
                  <del>$100.00</del> $70.00
                </p>
                <span className={styles.sale}>3% OFF</span>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              src="https://via.placeholder.com/300x250"
              alt="Product"
              width={300}
              height={200}
              layout="responsive"
            />
            <div className={styles.cardInfo}>
              <h3>Product name Here </h3>
              <p>Brand Name</p>
              <div className={styles.priceContainer}>
                <p className={styles.price}>
                  <del>$100.00</del> $70.00
                </p>
                <span className={styles.sale}>3% OFF</span>
              </div>
            </div>
          </div>
          {/* Bottom Row */}
          <div className={styles.card}>
            <Image
              src="https://via.placeholder.com/300x250"
              alt="Product"
              width={300}
              height={200}
              layout="responsive"
            />
            <div className={styles.cardInfo}>
              <h3>Product name Here </h3>
              <p>Brand Name</p>
              <div className={styles.priceContainer}>
                <p className={styles.price}>
                  <del>$100.00</del> $70.00
                </p>
                <span className={styles.sale}>3% OFF</span>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              src="https://via.placeholder.com/300x250"
              alt="Product"
              width={300}
              height={200}
              layout="responsive"
            />
            <div className={styles.cardInfo}>
            <h3>Product name Here  </h3>
              <p>Brand Name</p>
              <div className={styles.priceContainer}>
                <p className={styles.price}>
                  <del>$100.00</del> $70.00
                </p>
                <span className={styles.sale}>3% OFF</span>
              </div>
            </div>
          </div>
          <div className={`${styles.card} ${styles.largeCard}`}>
            <Image
              src="https://via.placeholder.com/600x400"
              alt="Shop Now"
              width={600}
              height={400}
              layout="responsive"
            />
            <div className={styles.cardContent}>
              <button className={styles.shopNow}>Shop Now</button>
            </div>
          </div>
        </div>
      </section>

{/* ----------------------------------------------------------------------------------------------------------------- */}
<section className={styles.cardArrivals}>
        <div className={styles.headershort}>
          <h2>New Arrivals</h2>
          <a className={styles.sellAll} href="#">
            Sell All
          </a>
        </div>
        <div className={styles.cardshort}>
          <button className={styles.prevButton}>&#10094;</button>
          {classes.map((item, index) => (
            <div key={index} className={styles.card}>
              <Image
                src="https://via.placeholder.com/300x250"
                alt="Product"
                width={300}
                height={200}
                layout="responsive"
              />
              <div className={styles.cardInfo}>
                <h3>{item.class_name}</h3>
                <p>Brand Name</p>
                <div className={styles.priceContainer}>
                  <p className={styles.price}>
                    <del>$100.00</del> $70.00
                  </p>
                  <span className={styles.sale}>3% OFF</span>
                </div>
              </div>
            </div>
          ))}
          <button className={styles.nextButton}>&#10095;</button>
        </div>
        <div className={styles.banner}>
          <Image
            src="https://via.placeholder.com/1200x150"
            alt="Banner"
            width={1200}
            height={150}
            layout="responsive"
          />
          <div className={styles.bannerContent}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2>50% Off</h2>
              <a className={styles.shopNow}>Shop Now</a>
            </div>
            <p>on all items</p>
          </div>
        </div>
      </section>



{/* ----------------------------------------------------------------------------------------------------------------- */}
      <section className={styles.cardArrivals}>
        <div className={styles.headershort}>
          <h2>Top Sellers</h2>
          <a className={styles.sellAll} href="#">
            Sell All
          </a>
        </div>
        <div className={styles.cardshort}>
          <button className={styles.prevButton}>&#10094;</button>
          {classes.map((item, index) => (
            <div key={index} className={styles.card}>
              <Image
                src="https://via.placeholder.com/300x250"
                alt="Product"
                width={300}
                height={200}
                layout="responsive"
              />
              <div className={styles.cardInfo}>
                <h3>{item.class_name}</h3>
                <p>Brand Name</p>
                <div className={styles.priceContainer}>
                  <p className={styles.price}>
                    <del>$100.00</del> $70.00
                  </p>
                  <span className={styles.sale}>3% OFF</span>
                </div>
              </div>
            </div>
          ))}
          <button className={styles.nextButton}>&#10095;</button>
        </div>
        <div className={styles.banner}>
          <Image
            src="https://via.placeholder.com/1200x150"
            alt="Banner"
            width={1200}
            height={150}
            layout="responsive"
          />
          <div className={styles.bannerContent}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2>35% Off</h2>
              <a className={styles.shopNow}>Shop Now</a>
            </div>
            <p>All Skincares Items</p>
          </div>
        </div>
      </section>
{/* ----------------------------------------------------------------------------------------------------------------- */}
      <section className={styles.user}>
        <div className={styles.usershort}>
          <h1>AMBASSADORS</h1>
          <a className={styles.sellAll} href="#">
            View All
          </a>
        </div>
        <div className={styles.cardUsers}>
          <button className={styles.prevButton}>&#10094;</button>
          <div className={styles.cardWrapper}>
            <div className={styles.ShortUesr}>
              <div className={styles.userIcon}>
                <Image
                  src="https://via.placeholder.com/100"
                  alt="User"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <h3 className={styles.userName}>User Name</h3>
              <button className={styles.subscribeButton}>@Subscribe</button>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>
                <FaFacebookSquare />
                </a>
                <a href="#" className={styles.socialIcon}>
                <FaYoutube />
                </a>
                <a href="#" className={styles.socialIcon}>
                <FaTwitter />
                </a>
              </div>
              <a className={styles.shopWithMe} href="#">
                Shop with Me
              </a>
            </div>

            <div className={styles.ShortUesr}>
              <div className={styles.userIcon}>
                <Image
                  src="https://via.placeholder.com/100"
                  alt="User"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <h3 className={styles.userName}>User Name</h3>
              <button className={styles.subscribeButton}>@Subscribe</button>
              <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>
                <FaFacebookSquare />
                </a>
                <a href="#" className={styles.socialIcon}>
                <FaYoutube />
                </a>
                <a href="#" className={styles.socialIcon}>
                <FaTwitter />
                </a>
              </div>
              <a className={styles.shopWithMe} href="#">
                Shop with Me
              </a>
            </div>

            <div className={styles.ShortUesr}>
              <div className={styles.userIcon}>
                <Image
                  src="https://via.placeholder.com/100"
                  alt="User"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <h3 className={styles.userName}>User Name</h3>
              <button className={styles.subscribeButton}>@Subscribe</button>
              <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>
                <FaFacebookSquare />
                </a>
                <a href="#" className={styles.socialIcon}>
                <FaYoutube />
                </a>
                <a href="#" className={styles.socialIcon}>
                <FaTwitter />
                </a>
              </div>
              <a className={styles.shopWithMe} href="#">
                Shop with Me
              </a>
            </div>

            <div className={styles.ShortUesr}>
              <div className={styles.userIcon}>
                <Image
                  src="https://via.placeholder.com/100"
                  alt="User"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <h3 className={styles.userName}>User Name</h3>
              <button className={styles.subscribeButton}>@Subscribe</button>
              <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>
                <FaFacebookSquare />
                </a>
                <a href="#" className={styles.socialIcon}>
                <FaYoutube />
                </a>
                <a href="#" className={styles.socialIcon}>
                <FaTwitter />
                </a>
              </div>
              <a className={styles.shopWithMe} href="#">
                Shop with Me
              </a>
            </div>
          </div>
          <button className={styles.nextButton}>&#10095;</button>
        </div>
      </section>

    </>
  );
};

export default Home;
