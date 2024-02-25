import { useEffect, useState } from "react";
import api from "../api";
import { Sidebar } from "../components";
import st from "../assets/styles/Home.module.css";
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

  return (
    <>
      <div className="grid">
        <Sidebar />
        <div className={st.container}>
          <h1>CardAttack</h1>
          <p></p>
          <nav>
            <ul>
              <li>
                <button>Iniciar Jogo</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default App;
