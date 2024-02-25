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
          <div className={st.head}>
            <h2>{card}</h2>
            <p className={st.tier}>Tier {tier}</p>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/736x/ac/c2/97/acc297360d2832df04e037d2f616410c.jpg"
              width={300}
              height={400}
            />
          </div>
          <div className={st.stats}>
            <div>
              <p>Poder {power}</p>
              <p>
                Ataque Físico {""}
                {physical_attack}
              </p>
            </div>
            <div>
              <p>HP {hp}</p>
              <p>Defesa {defense}</p>
            </div>
          </div>
        </div>
        <button>Comprar</button>
      </div>
    </>
  );
};

export default Card;
