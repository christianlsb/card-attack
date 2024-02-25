import { Sidebar } from "../components";
import st from "../assets/styles/Home.module.css";

const home = () => {
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
};

export default home;
