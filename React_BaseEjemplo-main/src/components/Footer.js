import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const menus = [
    { route: "/", text: "Home" },
    { route: "/whoweare", text: "Quienes Somos" },
    { route: "/contact", text: "Contacto" },
    { route: "/login", text: "Iniciar Sesión" },
  ];

  return (
    <footer>
      <div className="menu-footer">
        {menus.map((menu) => (
          <li className="lista">
            <Link to={menu.route}>{menu.text}</Link>
          </li>
        ))}
        <li className='lista'><a href="https://www.instagram.com/tati.cocinerita">Instagram</a></li>
      </div>
    </footer>
  );
};

export default Footer;
