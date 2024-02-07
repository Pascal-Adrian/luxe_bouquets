import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { item } from "../../types/item_type";
import { getProductData } from "../../test/utils/getProductData";
import { designer_vases } from "../../test/responce_emulations/designer_vases";
import { aroma_candles } from "../../test/responce_emulations/aroma_candles";
import RightChevron from "/src/assets/icons/icons-400/chevron-right.svg?react";
import LeftChevron from "/src/assets/icons/icons-400/chevron-left.svg?react";
import { useAppContext } from "../../utils/Context";

function ProductPage() {
  const { category, product } = useParams();
  const { cart, setCart } = useAppContext();

  const containerRef = useRef<HTMLDivElement>(null);

  const [productData, setProductData] = useState<item | null>(null);
  const [quantity, setQuantity] = useState<string>("1");
  const [recomandations, setRecomandations] = useState<item[]>([]);
  const [vases, setVases] = useState<item[]>([]);

  useEffect(() => {
    const getData = () => {
      if (category && product) {
        setProductData(getProductData(category, product));
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getRecomedations = () => {
      const vases: item[] = designer_vases.items;
      const candles: item[] = aroma_candles.items;
      const recomended: item[] = vases.concat(candles);
      setRecomandations(recomended);
    };
    getRecomedations();
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - 116,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 116,
        behavior: "smooth",
      });
    }
  };

  const handleAddButton = () => {
    if (quantity === "") {
      setQuantity("1");
      return;
    }
    const q = parseInt(quantity);
    setQuantity(() => (q + 1).toString());
  };

  const handleSubtractButton = () => {
    if (quantity === "") {
      setQuantity("1");
      return;
    }
    const q = parseInt(quantity);
    if (q > 1) {
      setQuantity(() => (q - 1).toString());
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.match(/^[0-9]*$/)) {
      setQuantity(value);
    }
  };

  const handleAddToCart = (itemToAdd: item) => {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex(
      (position) => position.item.id === itemToAdd.id
    );
    if (itemIndex !== -1) {
      newCart[itemIndex].quantity += parseInt(quantity);
    } else {
      newCart.push({ item: itemToAdd, quantity: parseInt(quantity) });
    }
    setCart(() => newCart);
  };

  return (
    <div id="product-page">
      <section className="product-page-product">
        <img src={productData?.image_link} alt={productData?.name} />
        <div className="product-page-product-right">
          <p className="product-page-directory">
            <Link to={`/shop/${category}`}>
              {category?.toUpperCase().replace(/[_ ]/g, " ")}
            </Link>
            &#32;/&#32;
            <span>{productData?.name.toUpperCase()}</span>
          </p>
          <h3>{`${productData?.name} - ${productData?.price}$`}</h3>
          <p className="product-page-product-description">
            {productData?.description}
          </p>
          <div className="product-page-quantity">
            <p>Quantity</p>
            <div className="product-page-quantity-selector">
              <button onClick={handleSubtractButton}>&ndash;</button>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9*]"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <button onClick={handleAddButton}>+</button>
            </div>
          </div>
          <div className="product-page-recommendations-title">
            <p>Excellent Combination with:</p>
            <p>Vase not included</p>
          </div>
          <div className="product-page-recommendations">
            <LeftChevron
              className="product-page-chevron"
              onClick={scrollLeft}
            />
            <div
              className="product-page-recommendations-container"
              ref={containerRef}
            >
              {recomandations.map((item) => (
                <div
                  className="product-page-recommendations-card"
                  key={item.id}
                  onClick={() => {
                    handleAddToCart(item);
                  }}
                >
                  <img src={item.image_link} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{item.price}$</p>
                </div>
              ))}
            </div>
            <RightChevron
              className="product-page-chevron"
              onClick={scrollRight}
            />
          </div>
          <div className="product-page-options" id="product">
            <p>Price options</p>
            <div className="product-page-option">
              <input
                type="radio"
                value="normal"
                id="radio-1"
                name="product-page-radio"
                checked={true}
                readOnly={true}
              />
              <label htmlFor="radio-1">
                One time purchase. Price {productData?.price}$
              </label>
            </div>
            <Link to="/shop" className="product-page-option">
              <input
                type="radio"
                value="subscribtion"
                id="radio-2"
                name="product-page-radio"
              />
              <label htmlFor="radio-2">
                Subscribe now, and save 25% on this order.
              </label>
            </Link>
          </div>
          <button
            className="product-page-cart-button"
            onClick={() => {
              handleAddToCart(productData as item);
              setQuantity("1");
            }}
          >
            add to basket
          </button>
        </div>
      </section>
      <section className="product-page-also">
        <h1>You may also like…</h1>
        <div className="product-page-also-container">
          {recomandations.slice(-4).map((item) => (
            <div
              className="product-page-also-card"
              style={{ backgroundImage: `url("${item.image_link}")` }}
              onClick={() => {
                handleAddToCart(item);
              }}
            >
              <h6>{item.name}</h6>
              <p>price {item.price}$</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
