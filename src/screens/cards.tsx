import { Sidebar } from "../components";
import { useEffect, useState } from "react";
import api from "../api";
interface Card {
  id: number;
  card: string;
  power: number;
  tier: string;
  hp: number;
  defense: number;
  physical_attack: number;
}
const Cards = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    api.get("/cards").then((response) => {
      setCards(response.data);
    });
  }, []);
  return (
    <>
      <div className="grid">
        <Sidebar />
        <div>
          <h1>Suas Cartas</h1>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Cards;
