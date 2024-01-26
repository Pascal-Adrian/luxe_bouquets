import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import "/src/styles/styles.scss";
import Footer from "./components/Footer/Footer";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

function App() {
  return (
    <div id="app">
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/shop/fresh_flowers"
            element={<CategoryPage category="fresh_flowers" />}
          />
          <Route
            path="/shop/dried_flowers"
            element={<CategoryPage category="dried_flowers" />}
          />
          <Route
            path="/shop/live_plants"
            element={<CategoryPage category="live_plants" />}
          />
          <Route
            path="/shop/aroma_candles"
            element={<CategoryPage category="aroma_candles" />}
          />
          <Route
            path="/shop/fresheners"
            element={<CategoryPage category="freshners" />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
