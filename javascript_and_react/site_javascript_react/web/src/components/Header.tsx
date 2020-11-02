import React from "react";
import { Link } from "react-router-dom";
import planetLogo from "../images/planet-logo.svg";
import "../styles/components/Header.css";


export default function Header() {
  return (
    <>
      <div className="header-container-purple">
        <div className="header-container">
          <div className="logo">
            <img className="planet-logo" src={planetLogo} />
            Carlos
            <text className="nome-logo">H.</text>
          </div>

          <div className="menu">
            <ul className="menu">
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about_me" className="link">
                  Sobre mim
                </Link>
              </li>
              <li>
                <Link to="" className="link">
                  Estudos
                </Link>
              </li>
              <li>
                <Link to="" className="link">
                  Contatos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
