import st from "../assets/styles/Sidebar.module.css";
const Sidebar = () => {
  return (
    <>
      <div className={st.container}>
        <nav>
          <ul>
            <li>Cartas</li>
            <li>Descks</li>
            <li>Loja</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
