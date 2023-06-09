import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import {  ParticlesOptions } from "./components/particles/Particles";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function App() {
  const particlesInit = (engine) => {
    loadFull(engine);
  };
  return (
    <div>
      <>
      <Particles init={particlesInit} options={ParticlesOptions} />
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
        
      
      </>
    </div>
  )
}

export default App;
