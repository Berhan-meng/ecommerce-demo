import styles from "./Footer.module.css";
import { useState, useEffect } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        id="footer"
        className={`${styles.footer} ${styles.footerGradient}`}
      >
        <div className={`${styles.footerContainer} container px-lg-5`}>
          <div className={styles.footerRow}>
            {/* Copyright Section */}
            <div className="col-lg-6 text-center text-lg-start">
              <p className={styles.copyright}>
                Copyright © {new Date().getFullYear()}{" "}
                <Link href="/home" className={styles.copyrightLink}>
                  Berhanu Mengesha
                </Link>
                . All Rights Reserved.
              </p>
            </div>

            {/* Footer Navigation */}
            <div className="col-lg-6">
              <ul className={`${styles.footerNav} nav`}>
                <li className={styles.footerNavItem}>
                  <Link className={styles.footerNavLink} to="/terms">
                    Terms & Policy
                  </Link>
                </li>
                <li className={styles.footerNavItem}>
                  <Link className={styles.footerNavLink} to="/disclaimer">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Optional Additional Info */}
          <div className={styles.footerInfo}>
            <p>Built with React & Bootstrap • Designed for performance</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}

      <button
        className={`${styles.backToTop} ${showBackToTop ? styles.visible : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <HiOutlineArrowUp title="Back to Top" />
      </button>
    </>
  );
}
