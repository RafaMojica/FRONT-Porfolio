import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import RM from "../assets/RM Removebg.png";

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <Link to={"/"}><img src={RM} alt="RM" /></Link>
      </div>
      <div className="navbar_menu">
        <ul>
          <Link to={"/"}><li>Inicio</li></Link>
          <Link to={"proyectos"}><li>Proyectos</li></Link>
          <Link to={"skills"}><li>Skills</li></Link>
          <Link to={"conoceme"}><li>Conoceme</li></Link>
          <Link to={"contacto"}><li>Contacto</li></Link>
        </ul>
      </div>
      <div className="navbar_icons">
        <a href="https://github.com/RafaMojica" target="_blank"><BsGithub className="BsGithub" /></a>
        <a href="https://www.instagram.com/tartaruga_nago" target="_blank"><BsInstagram className="BsInstagram" /></a>
        <a href="https://www.linkedin.com/in/rafamojica" target="_blank"><BsLinkedin className="BsLinkedin" /></a>
      </div>
    </div>
  );
}

export default Navbar;
