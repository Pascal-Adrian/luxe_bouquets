interface PlanCardProps {
  id: number;
  name: string;
  price: number;
  freeDelivery: boolean;
  details: string[];
  savings: number;
  image: string;
  selectAction: (id: number) => void;
}

function PlanCard(props: PlanCardProps) {
  return (
    <div className="plan-card">
      <div className="plan-card-describtion">
        <img
          className="plan-card-describtion-image"
          src={props.image}
          alt={`Image for ${props.name} plan`}
        />
        <div className="plan-card-describtion-text">
          <h6 className="plan-card-describtion-text-name">{props.name}</h6>
          <ul className="plan-card-describtion-text-list">
            <li className="plan-card-describtion-text-list-item">
              ${props.price}
            </li>
            <li className="plan-card-describtion-text-list-item">
              {props.freeDelivery ? "Free Delivery" : "Delivery Fee: $10"}
            </li>
            {props.details.map((detail, index) => (
              <li className="plan-card-describtion-text-list-item" key={index}>
                {detail}
              </li>
            ))}
            <li className="plan-card-describtion-text-list-item">
              Save up to {props.savings}%
            </li>
          </ul>
        </div>
      </div>
      <button
        className="plan-card-button"
        onClick={() => props.selectAction(props.id)}
      >
        Select
      </button>
    </div>
  );
}

export default PlanCard;
