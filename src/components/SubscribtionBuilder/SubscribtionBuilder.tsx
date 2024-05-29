import { useState } from "react";
import { subscribtion_plans } from "../../test/responce_emulations/subscribtion_plans";
import PlanCard from "../PlanCard/PlanCard";
import { useAppContext } from "../../utils/Context";

function PlanSelector() {
  const plans = subscribtion_plans;

  const { frequency, setFrequency } = useState<string>("weekly");

  const { quantity, setQuantity } = useState<number>(1);

  const { cart, setCart } = useAppContext();

  const addToCart = (id: number) => {
    const selectedPlan = plans.find((plan) => plan.id === id);
    const newCart = [...cart];
    if (selectedPlan) {
      newCart.push({
        item: {
          id: selectedPlan.id,
          name: selectedPlan.name,
          price: selectedPlan.price,
          image_link: selectedPlan.image,
          category: "subscription",
          description: null,
        },
        quantity: 1,
      });
      setCart(() => newCart);
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
              selectAction={addToCart}
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
              className="subscribtion-builder-frequency-button"
              onClick={() => setFrequency("montly")}
            >
              Monthly
            </button>
          </li>
          <li className="subscribtion-builder-frequency-list-item">
            <button
              className="subscribtion-builder-frequency-button"
              onClick={() => setFrequency("bi-weekly")}
            >
              Bi-Weekly
            </button>
          </li>
          <li className="subscribtion-builder-frequency-list-item">
            <button
              className="subscribtion-builder-frequency-button"
              onClick={() => setFrequency("weekly")}
            >
              Weekly
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PlanSelector;
