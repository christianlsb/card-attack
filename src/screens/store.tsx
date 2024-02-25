import { Card, Sidebar } from "../components";
import { useEffect, useState } from "react";
import api from "../api";
import st from "../assets/styles/Store.module.css";
interface Card {
  id: number;
  card: string;
  power: number;
  tier: string;
  hp: number;
  defense: number;
  physical_attack: number;
}
const Store = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    api.get("/cards").then((response) => {
      setCards(response.data);
    });
  }, []);
  return (
    <>
      <div className="area">
        <Sidebar />
        <div className="container">
          <h1>Loja</h1>
          <p></p>
          <div>
            <ul className={st.gridCards}>
              {cards.map(
                ({ id, card, hp, defense, physical_attack, power, tier }) => (
                  <li key={id}>
                    <Card
                      defense={defense}
                      power={power}
                      physical_attack={physical_attack}
                      tier={tier}
                      hp={hp}
                      card={card}
                    />
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
