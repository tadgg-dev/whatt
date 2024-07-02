import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menus = [
    { route: "/", text: "Home" },
    { route: "/whoweare", text: "Quienes Somos" },
    { route: "/contact", text: "Contacto" },
    { route: "/login", text: "Iniciar Sesión" },
  ];

  return (
    <header>
      <div className="menu-header">
        <h1 className="marca">Tati Cocinerita</h1>
        <nav>
          <ul>
            {menus.map((menu) => (
              <li className="lista">
                <Link to={menu.route}>{menu.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
