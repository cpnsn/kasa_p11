import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <img src={"/images/logo/logo.svg"} alt="Logo Kasa" />
      <div>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
