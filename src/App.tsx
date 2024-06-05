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
import Modal from "./components/Modal/Modal.tsx";
import { useSelector } from "react-redux";
import { RootState } from "./store/store.tsx";
import { useDispatch } from "react-redux";
import { closeCart, openCart } from "./store/modalsSlice.tsx";
import Cart from "./components/Cart/Cart.tsx";

function App() {
  const cartModal = useSelector((state: RootState) => state.modals.modals.cart);

  const dispatch = useDispatch();

  const handleCartClose = () => {
    dispatch(closeCart());
  };

  const handleCartOpen = () => {
    dispatch(openCart());
  };

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
        <Modal
          isOpen={cartModal}
          onClose={handleCartClose}
          style={{
            left: "100%",
            transform: "translate(-100%, -50%)",
            backdropFilter: "rgba(#d2d2d7, 0.35)",
          }}
        >
          <Cart turnOffCart={handleCartClose} />
        </Modal>
      </Router>
    </div>
  );
}

export default App;
