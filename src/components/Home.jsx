import React from "react";
import Photo from "../assets/Photo Removebg.png";
import Project1 from "../assets/Home Watch Me.png";
import Project2 from "../assets/Home Como en casa.png";


function Home() {
  return (
    <div>
      <div className="home_present_container">
        <div>
          <img src={Photo} alt="Photo" />
        </div>
        <div>
          <div className="home_text_container">
            <h2>HOLA SOY</h2>
            <h1>RAFAEL MOJICA</h1>
            <h3>Full Stack Developer</h3>
          </div>
          <button>DESCARGAR CV</button>
        </div>
      </div>
      <div className="home_project_container">
        <h2>Proyectos recientes</h2>
        <div className="home_allProject_container">
          <div className="home_single_project"></div>
          <div className="home_single_project"></div>
          <div className="home_single_project"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
