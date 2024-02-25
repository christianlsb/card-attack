import React from "react";
import st from "../assets/styles/Card.module.css";

interface CardProps {
  card: string;
  power: number;
  tier: string;
  hp: number;
  defense: number;
  physical_attack: number;
}

const Card: React.FC<CardProps> = ({
  card,
  tier,
  power,
  hp,
  defense,
  physical_attack,
}) => {
  return (
    <>
      <div className={st.container}>
        <div className={st.content}>
          <h2>{card}</h2>
          <p>{tier}</p>
          <div>
            <img
              src="https://i.pinimg.com/736x/ac/c2/97/acc297360d2832df04e037d2f616410c.jpg"
              width={300}
              height={400}
            />
          </div>
          <div>
            <p>{power}</p>
            <p>{hp}</p>
            <p>{defense}</p>
            <p>{physical_attack}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
