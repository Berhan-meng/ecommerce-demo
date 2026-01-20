import React from "react";
import styles from "./TermsAndPrivacy.module.css";

const TermsAndPrivacy = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <section style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>E-Commerce demo – Terms & Conditions and Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
      </p>

      <hr />

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using this E-commerce project, you agree to the
        following terms and conditions.
      </p>

      <h2>2. Educational Project Notice</h2>
      <p>
        This application is a personal portfolio project built solely for
        educational and skill demonstration purposes. It is not an official
        Amazon service.
      </p>

      <h2>3. No Commercial Activity</h2>
      <p>
        No real products are sold through this platform, and no real financial
        transactions occur. Any checkout or payment functionality is purely
        simulated.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        All original code, design, and implementation of this project belong to
        the developer.
      </p>

      <p>However, any references to:</p>

      <ul>
        <li>Amazon brand name</li>
        <li>Logos</li>
        <li>Product images</li>
        <li>Trademarks</li>
      </ul>

      <p>
        remain the property of their respective owners and are used only for
        learning purposes.
      </p>

      <h2>5. No Affiliation</h2>
      <p>
        This project has no connection with Amazon.com, Inc. It is an
        independent personal development project created to practice modern web
        technologies.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        The developer is not responsible for any misuse of this project, its
        content, or its source code.
      </p>

      <h2>7. External Links</h2>
      <p>
        Any links to external services (such as GitHub or other platforms) are
        provided for reference only. I am not responsible for their content or
        practices.
      </p>

      <hr />

      <h1>Privacy Policy</h1>

      <h2>1. Data Collection</h2>
      <p>
        This E-Commerce Demo project may collect the following information if
        you use features such as registration or contact forms:
      </p>

      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Demo account information</li>
      </ul>

      <h2>2. Purpose of Data</h2>
      <p>Any data collected is used only for:</p>

      <ul>
        <li>Demonstrating authentication features</li>
        <li>Testing user interface functionality</li>
        <li>Improving the project as a learning application</li>
      </ul>

      <h2>3. No Real Personal Data Required</h2>
      <p>
        Users are encouraged to use test or dummy information, as this project
        is not a real commercial platform.
      </p>

      <h2>4. Data Sharing</h2>
      <p>
        No personal information entered into this project is shared, sold, or
        distributed to any third parties.
      </p>

      <h2>5. Security</h2>
      <p>
        Although basic security measures are implemented for learning purposes,
        this project is not intended to store sensitive or real personal data.
      </p>

      <h2>6. Changes to Policy</h2>
      <p>
        These terms and policies may be updated at any time without prior
        notice.
      </p>

      <hr />

      <h3>Contact</h3>
      <p>
        For questions about this E-Commerce Demo project, please contact me
        through my portfolio website:{" "}
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

export default TermsAndPrivacy;
