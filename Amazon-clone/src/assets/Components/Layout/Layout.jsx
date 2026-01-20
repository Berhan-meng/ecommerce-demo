import Header from "../header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
