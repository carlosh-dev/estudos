import React from "react";
import Header from "../components/Header";
import planetHome from "../images/planet-icon-home.svg";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import "../styles/pages/Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-content">
        <img
          className="planet-home"
          src={planetHome}
          alt="Logo Carlos Henrique"
        />
        <h1 className="txt-1">Bem-vindo(a)!</h1>
        <h3 className="txt-2">
          Esse é um projeto pessoal <br />
          para estudo de Javascrit e React!
        </h3>
        <h5 className="txt-3">Aqui você pode saber um pouco sobre mim. :)</h5>
        <div className="buttom-git">
          <a className="link-git" href="https://github.com/carlosh-dev" target="_blank">
            <AiFillGithub size={40} color="#FFF" /> 
            <h5 className="link-text">Código disponível no GitHub</h5>
          </a>
        </div>
      </div>
    </>
  );
}
