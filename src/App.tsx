import { useEffect, useState } from "react";
import api from "./api";
import { Sidebar } from "./components";
interface Card {
  id: number;
  card: string;
  power: number;
  tier: string;
  hp: number;
  defense: number;
  physical_attack: number;
}

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    api.get("/cards").then((response) => {
      setCards(response.data);
    });
  }, []);

  console.log(cards);
  return (
    <>
      <div className="grid">
        <Sidebar />
        <h1>CardAttack</h1>
        {cards.map(({ id, card }) => (
          <p key={id}>{card}</p>
        ))}
      </div>
    </>
  );
}

export default App;
