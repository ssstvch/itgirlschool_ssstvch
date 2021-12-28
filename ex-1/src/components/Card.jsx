import React from "react";
import Tariff from "./Tariff";
import "../styles/tariff-card.scss";
import "../styles/profit-card.scss";

const tariffes = [
  {
    id: "300",
    tariff: "unlim300",
    tariffName: "Безлимитный 300",
    price: "300",
    speed: "10",
  },
  {
    id: "450",
    tariff: "unlim450",
    tariffName: "Безлимитный 450",
    price: "450",
    speed: "50",
  },
  {
    id: "500",
    tariff: "unlim500",
    tariffName: "Безлимитный 500",
    price: "500",
    speed: "100",
  },
  {
    id: "1000",
    tariff: "unlim1000",
    tariffName: "Безлимитный 1000",
    price: "1000",
    speed: "200",
  },
];

const Card = () => {
  const [selectedCard, setSelectedCard] = React.useState(-1);

  const handleClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className="tariff-cards">
      {tariffes.map((_, i) => (
        <Tariff
          key={_.id}
          tariff={_.tariff}
          tariffName={_.tariffName}
          price={_.price}
          speed={_.speed}
          selected={selectedCard === i}
          onClick={() => handleClick(i)}
        />
      ))}
    </div>
  );
};

export default Card;
