import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import "/src/styles/styles.scss";
import Footer from "./components/Footer/Footer";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

function App() {
  const categories = [
    "fresh_flowers",
    "dried_flowers",
    "live_plants",
    "aroma_candles",
    "fresheners",
  ];

  return (
    <div id="app">
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          {categories.map((category) => (
            <Route
              key={category}
              path={"/shop/:category"}
              element={<CategoryPage />}
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
