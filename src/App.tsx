import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import "/src/styles/styles.scss";
import Footer from "./components/Footer/Footer";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";
import SubscribtionPage from "./pages/SubscribtionPage/SubscribtionPage.tsx";

function App() {
  return (
    <div id="app">
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:category" element={<CategoryPage />} />
          <Route path="/shop/:category/:product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/subscribtion" element={<SubscribtionPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
