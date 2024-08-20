import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCart, BsPerson, BsSearch, BsChevronDown, BsList } from 'react-icons/bs';
import Link from "next/link";
import styles from './page.module.css';

const Header = () => {
  return (
    <header>
      {/* Top Tier */}
      <div className={`${styles.topTier} container-fluid bg-light`}>
        <div className="row align-items-center">
          <div className="col-auto">
            <a href="/" className={styles.logo}>
              Logo
            </a>
          </div>
          <div className="col d-none d-md-block">
            <div className={styles.searchBar}>
              <input type="text" className="form-control" placeholder="Type in and hit Enter..." />
              <div className={styles.searchIcon}>
                <BsSearch />
              </div>
            </div>
          </div>
          <div className="col-auto d-none d-md-block">
            <div className={styles.iconContainer}>
              <a href="/cart" className={styles.icon}>
                <BsCart />
              </a>
              <div className={styles.divider}></div>
              <a href="/profile" className={styles.icon}>
                <BsPerson />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar for Mobile */}
      <div className={`${styles.searchBarMobile} d-block d-md-none`}>
        <div className={styles.searchBar}>
          <input type="text" className="form-control" placeholder="Type in and hit Enter..." />
          <div className={styles.searchIcon}>
            <BsSearch />
          </div>
        </div>
      </div>

      {/* Bottom Tier */}
      <div className={`${styles.bottomTier} navbar navbar-expand-lg navbar-light bg-light`}>
        <div className="row align-items-center w-100">
          <div className="col-auto d-none d-md-block">
            <a href="#" className={styles.brand}>
              All Brands <BsChevronDown />
            </a>
          </div>
          <div className="col d-none d-md-block">
            <ul className="nav">
              <li className="nav-item">
             <Link href="/test" className="btn text-dark">Skincare </Link>
              </li>
              <li className="nav-item">
                <a href="#" className={`btn text-dark`}>Make Up</a>
              </li>
              <li className="nav-item">
                <a href="#" className={`btn text-dark`}>Hair</a>
              </li>
              <li className="nav-item">
                <a href="#" className={`btn text-dark`}>Bath</a>
              </li>
              <li className="nav-item">
                <a href="#" className={`btn text-dark`}>Beauty</a>
              </li>
              <li className="nav-item">
                <a href="#" className={`btn text-dark`}>Promos</a>
              </li>
            </ul>
          </div>
          <div className="col-auto ml-auto d-none d-md-block">
            <a href="#" className={`${styles.sellWithUs} btn text-white`}>
              Sell with Us
            </a>
          </div>
        </div>
      </div>

         {/* Mobile Menu */}
         <div className={`${styles.mobileMenu} d-flex d-md-none`}>
        <a href="#" className={`${styles.icon} ${styles.menuIcon}`}>
          <BsList /><span className={styles.mobileIconText}>Category</span>
        </a>
        <a href="/profile" className={styles.icon}>
          <BsPerson /><span className={styles.mobileIconText}>User</span>
        </a>
        <a href="/cart" className={styles.icon}>
          <BsCart /><span className={styles.mobileIconText}>Cart</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
