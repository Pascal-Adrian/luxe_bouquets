import { useState } from "react";
import { subscribtion_plans } from "../../test/responce_emulations/subscribtion_plans";
import PlanCard from "../PlanCard/PlanCard";
import { item } from "../../types/item_type";
import { useDispatch } from "react-redux";
import { addSubscriptionToCart } from "../../store/slice";

function PlanSelector() {
  const plans = subscribtion_plans;

  const [frequency, setFrequency] = useState<string>("");

  const [quantity, setQuantity] = useState<string>("1");

  const [selectedPlan, setSelectedPlan] = useState<item>({} as item);

  const dispatch = useDispatch();

  const selectPlan = (id: number) => {
    const plan = plans.find((plan) => plan.id === id);
    if (plan) {
      setSelectedPlan({
        id: plan.id,
        name: plan.name,
        price: plan.price,
        image_link: plan.image,
        description: "subscription plan",
        category: frequency,
      });
    }
  };

  const selectedButton = (selectedFrequency: string) => {
    return frequency === selectedFrequency ? "-selected" : "";
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.match(/^[0-9]*$/)) {
      setQuantity(value);
    }
  };

  const handlePlusButton = () => {
    if (quantity === "") {
      setQuantity("1");
      return;
    }
    const q = parseInt(quantity);
    setQuantity(() => (q + 1).toString());
  };

  const handleMinusButton = () => {
    if (quantity === "") {
      setQuantity("1");
      return;
    }
    const q = parseInt(quantity);
    if (q > 1) {
      setQuantity(() => (q - 1).toString());
    }
  };

  const handleFrequency = (selectedFrequency: string) => {
    const updatedPlan = { ...selectedPlan, category: selectedFrequency };
    setSelectedPlan(() => updatedPlan);
    setFrequency(selectedFrequency);
  };

  const totalVisible = () => {
    return frequency !== "" && quantity !== "" && selectedPlan.price;
  };

  const convertFrequency = () => {
    switch (frequency) {
      case "monthly":
        return 1;
      case "bi-weekly":
        return 2;
      case "weekly":
        return 4;
      default:
        return 0;
    }
  };

  const totalSum = () => {
    let price = 0;
    if (selectedPlan.price && frequency && quantity) {
      const freq = convertFrequency();
      if (freq === 1) {
        price = selectedPlan.price * parseInt(quantity);
      }
      if (freq === 2) {
        price =
          (selectedPlan.price + Math.ceil(selectedPlan.price * 0.8)) *
          parseInt(quantity);
      }
      if (freq === 4) {
        price =
          (selectedPlan.price + Math.ceil(selectedPlan.price * 0.75 * 3)) *
          parseInt(quantity);
      }
    }
    return price;
  };

  const handleAddToCart = () => {
    if (totalSum() !== 0) {
      const newItem = {
        item: {
          id: selectedPlan.id + convertFrequency(),
          name:
            selectedPlan.name +
            " Plan (" +
            selectedPlan.category +
            " Subscription)",
          price: totalSum() / parseInt(quantity),
          image_link: selectedPlan.image_link,
          description: "subscription plan",
          category: selectedPlan.category,
        },
        quantity: parseInt(quantity),
      };
      dispatch(
        addSubscriptionToCart({
          item: newItem.item,
          quantity: newItem.quantity,
        })
      );
    }
  };

  return (
    <div className="subscribtion-builder">
      <p className="subscribtion-builder-overline">Build Your Subscription</p>
      <h3 className="subscribtion-builder-title">Select a Plan</h3>
      <p className="subscribtion-builder-description">
        Enjoy free shipping on every order and save up to 30%. Every bouquet we
        deliver is carefully curated to ensure it arrives fresh and stunning. To
        modify, pause, or cancel your subscription, simply log in to your
        account dashboard. You're in complete control of your flower delivery
        experience.
      </p>
      <ul className="subscribtion-builder-plan-list">
        {plans.map((plan, index) => (
          <li key={index}>
            <PlanCard
              id={plan.id}
              name={plan.name}
              price={plan.price}
              freeDelivery={plan.freeDelivery}
              details={plan.details}
              savings={plan.savings}
              image={plan.image}
              selectAction={selectPlan}
              selected={selectedPlan.id === plan.id}
            />
          </li>
        ))}
      </ul>
      <div className="subscribtion-builder-frequency">
        <h4 className="subscribtion-builder-frequency-title">
          How often do you want flowers delivered ?
        </h4>
        <p className="subscribtion-builder-frequency-subtitle">
          Select the delivery frequency
        </p>
        <ul className="subscribtion-builder-frequency-list">
          <li className="subscribtion-builder-frequency-list-item">
            <button
              className={
                "subscribtion-builder-frequency-button" +
                selectedButton("monthly")
              }
              onClick={() => handleFrequency("monthly")}
            >
              Monthly
            </button>
          </li>
          <li className="subscribtion-builder-frequency-list-item">
            <button
              className={
                "subscribtion-builder-frequency-button" +
                selectedButton("bi-weekly")
              }
              onClick={() => handleFrequency("bi-weekly")}
            >
              Bi-Weekly
            </button>
          </li>
          <li className="subscribtion-builder-frequency-list-item">
            <button
              className={
                "subscribtion-builder-frequency-button" +
                selectedButton("weekly")
              }
              onClick={() => handleFrequency("weekly")}
            >
              Weekly
            </button>
          </li>
        </ul>
      </div>
      <div className="subscribtion-builder-quantity">
        <h4 className="subscribtion-builder-quantity-title">
          How many deliveries would you like ?
        </h4>
        <p className="subscribtion-builder-quantity-description">
          Pay once and do not worry about flowers, our bouquets will be
          beautiful and on time, as many times as you need{" "}
        </p>
        <div className="subscribtion-builder-quantity-selector">
          <button
            className="subscribtion-builder-quantity-selector-button"
            onClick={handleMinusButton}
          >
            &ndash;
          </button>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9*]"
            value={quantity}
            onChange={handleQuantityChange}
            className="subscribtion-builder-quantity-selector-input"
          />
          <button
            className="subscribtion-builder-quantity-selector-button"
            onClick={handlePlusButton}
          >
            +
          </button>
        </div>
      </div>
      <div
        className={
          "subscribtion-builder-total" +
          (totalVisible() ? "" : " subscribtion-builder-total-invisible")
        }
      >
        <h4 className="subscribtion-builder-total-title">Total:</h4>
        <span className="subscribtion-builder-total-summ">{totalSum()} $</span>
      </div>
      <button
        className="subscribtion-builder-checkout-button"
        onClick={handleAddToCart}
      >
        Checkout
      </button>
    </div>
  );
}

export default PlanSelector;
