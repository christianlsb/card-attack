import st from "../assets/styles/Sidebar.module.css";
const Sidebar = () => {
  return (
    <>
      <div className={st.container}>
        <nav>
          <ul>
            <li>
              <a href="/">Jogar</a>
            </li>
            <li>
              <a href="/cartas">Cartas</a>
            </li>
            <li>
              <a href="/decks">Decks</a>
            </li>
            <li>
              <a href="/loja">Loja</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
