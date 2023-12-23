import React from "react";
import Header from "../Header/Header";
import Inicio from "../Inicio/Inicio";
import AboutMe from "../AboutMe/AboutMe";
import Proyectos from "../Proyectos/Proyectos";
import Skills from "../Skills/Skills";
import Contacto from "../Contacto/Contacto";
import Footer from "../Footer/Footer";
import Timeline from "../Timeline/Timeline";

export default function LandingPage (){
 
    return(
        <div className="h-screen">
            <Header/>
            <Inicio/>
            <AboutMe/>
            <Skills/>
            <Proyectos/>
            <Timeline/>
            <Contacto/>
            <Footer className="absolute bottom-0"/>
        </div>
    )
}