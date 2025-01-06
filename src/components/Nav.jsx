import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <img src={"/images/logo/logo.svg"} alt="Logo Kasa" />
      <div>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Accueil</NavLink>
        <NavLink to="/a-propos" className={({ isActive }) => (isActive ? "active-link" : "")}>À propos</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
