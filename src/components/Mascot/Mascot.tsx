import mascot from "/images/mascot.png";

function Mascot() {
  return (
    <div className="mascot-container">
      <img className="mascot" src={mascot} alt="mascot" />
    </div>
  );
}

export default Mascot;