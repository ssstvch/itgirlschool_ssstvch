import React from "react";
import Tariff from "./Tariff";
import '../styles/tariff-card.scss';
import '../styles/profit-card.scss';

const tariffes = [
    {id: "300", tariff: "unlim300", tariffName: "Безлимитный 300", price: "300", speed: "10"},
    {id: "450", tariff: "unlim450", tariffName: "Безлимитный 450", price: "450", speed: "50"},
    {id: "500", tariff: "unlim500", tariffName: "Безлимитный 500", price: "500", speed: "100", profit: "profit"},
    {id: "1000", tariff: "unlim1000", tariffName: "Безлимитный 1000", price: "1000", speed: "200"}
  ]

const Card = () => {
    console.log(tariffes[2].profit);
     return (
      <React.Fragment>
          {
              tariffes.map(tariff => 
                  tariff.profit
                      ? <Tariff profit={tariff.profit} key={tariff.id} tariff={tariff.tariff} tariffName={tariff.tariffName} price={tariff.price} speed={tariff.speed} /> 
                      : <Tariff key={tariff.id} tariff={tariff.tariff} tariffName={tariff.tariffName} price={tariff.price} speed={tariff.speed} /> 
              )
          }
          
      </React.Fragment>
    );
  }
  
  export default Card;