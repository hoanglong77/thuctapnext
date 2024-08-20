import styles from './page.module.css'; 
import { FaFacebookSquare, FaYoutube , FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div className={styles.logo}>
            <span>Your Logo</span>
            <div className={styles.socialIcons}>
            <a href="https://facebook.com/yourpage" className={styles.socialIcon}>
              <FaFacebookSquare />
            </a>
            <a href="https://youtube.com/yourchannel" className={styles.socialIcon}>
              <FaYoutube />
            </a>
            <a href="https://twitter.com/yourprofile" className={styles.socialIcon}>
              <FaTwitter />
            </a>
          </div>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4>Main Pages</h4>
          <ul>
            <li><a href="#">Sell with Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Promos</a></li>
            <li><a href="#">Become an Ambassador</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Policy</h4>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Return Policy</a></li>
            
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Categories</h4>
          <ul>
            <li><a href="#">Skincare</a></li>
            <li><a href="#">Makeup</a></li>
            <li><a href="#">Hair care</a></li>
            <li><a href="#">Bath & Body</a></li>
            <li><a href="#">Beauty Suppliments</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Subscribe</h4>
          <p>Subscribe to our newsletter</p>
          <form className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.emailInput}
            />
            <button type="submit" className={styles.subscribeButton}>Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className={styles.footerCopyright}>
        <p>&copy; {new Date().getFullYear()}  TPHL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
