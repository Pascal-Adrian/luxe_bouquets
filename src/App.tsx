import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import "/src/styles/styles.scss";
import Footer from "./components/Footer/Footer";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import { useState } from "react";
import { cart } from "./types/cart_type.tsx";
import { AppContext } from "./utils/Context.tsx";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";

function App() {
  const [cartData, setCartData] = useState<cart>([] as cart);
  const value = { cart: cartData, setCart: setCartData };

  return (
    <div id="app">
      <AppContext.Provider value={value}>
        <Router>
          <Navbar />
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:category" element={<CategoryPage />} />
            <Route path="/shop/:category/:product" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
