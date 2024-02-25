import { Sidebar } from "../components";
import st from "../assets/styles/Home.module.css";

const Home = () => {
  return (
    <>
      <div className="area">
        <Sidebar />
        <div className="container">
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
};

export default Home;
