import "./Header.css";

import DarkModeSwitch from "../DarkModeSwitch";

const Header = () => {
  return (
    <>
      <header className="header">
        <a className="logo" href="#inicio" aria-label="Ir a la pagina principal">
          <h2 className="titulo">Gherson Torres</h2>
          <p className="subTitulo">Ingeniero de Software | TI, Datos e IA</p>
        </a>
        <nav className="navbar">
          <a href="#trabajos">Trabajos</a>
          <a href="#acerca-de">Acerca de</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <DarkModeSwitch />
      </header>
    </>
  );
};
export default Header;
