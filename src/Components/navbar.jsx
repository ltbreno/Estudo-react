import React from "react";
import logoImg from "../assets/svg/logo.svg"
import "../styles/navbar.css"

export class Navbar extends React.Component {
    render() {
        return (
        <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src={logoImg} alt="Jornal" className="logo" />
            <h1>My Jornal News</h1>
          </div>

          <ul className="nav-list">
            <li><a href="/">Home</a></li>

            <li><a href="/">Em Alta</a></li>

            <li><a href="/">Categorias</a></li>

            <li><a href="/">Sobre nós</a></li>

          </ul>
        </nav>
      </header>
        )
    }
}

