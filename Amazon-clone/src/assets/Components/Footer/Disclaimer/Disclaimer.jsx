import React from "react";

const Disclaimer = () => {
  return (
    <section style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>Amazon Clone Project Disclaimer</h1>
      <p>
        <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
      </p>

      <hr />

      <h2>Project Purpose</h2>
      <p>
        This Amazon Clone project has been created strictly for
        <strong>
          {" "}
          educational, learning, and portfolio demonstration purposes only.
        </strong>
      </p>

      <p>
        The application is designed to showcase my skills in full-stack web
        development, including frontend design, backend development, API
        integration, authentication, and database management.
      </p>

      <h2>No Commercial Use</h2>
      <p>
        This project is <strong>not intended for commercial use</strong> and
        does not generate any revenue. It is a personal practice project built
        to demonstrate technical abilities.
      </p>

      <h2>Trademark Notice</h2>
      <p>
        “Amazon”, the Amazon logo, product images, brand names, and related
        trademarks are the property of <strong>Amazon.com, Inc.</strong> and its
        affiliates.
      </p>

      <p>
        Their use in this project is purely for educational demonstration and
        does not imply:
      </p>

      <ul>
        <li>Any official relationship with Amazon</li>
        <li>Partnership or affiliation</li>
        <li>Authorization or endorsement</li>
      </ul>

      <h2>Not a Real E-commerce Platform</h2>
      <p>All features within this application, including:</p>

      <ul>
        <li>User registration and login</li>
        <li>Product browsing</li>
        <li>Shopping cart</li>
        <li>Checkout process</li>
        <li>Payments</li>
      </ul>

      <p>
        are <strong>simulated functionalities</strong>. No real products are
        sold, and no real financial transactions take place.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        I am not responsible for any misuse of this project or its source code.
        This application is provided “as is” without any guarantees.
      </p>

      <h2>Source Code Usage</h2>
      <p>
        The code for this project is intended for learning and portfolio
        demonstration. It should not be reused for illegal, unethical, or
        misleading purposes.
      </p>

      <h2>Changes to Disclaimer</h2>
      <p>This disclaimer may be updated at any time without prior notice.</p>

      <hr />

      <h3>Contact</h3>
      <p>
        If you have any questions regarding this project disclaimer, feel free
        to contact me through my portfolio website:{" "}
        <a
          href="https://www.birhann.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          birhann.com
        </a>
      </p>

      <p>
        <strong>Developer:</strong> Berhanu Mengesha
      </p>
    </section>
  );
};

export default Disclaimer;
