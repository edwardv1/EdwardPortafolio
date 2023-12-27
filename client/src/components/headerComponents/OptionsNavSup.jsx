import React, { useState } from "react";
import inicio from "../../assets/nav/inicio.png";
import about from "../../assets/nav/about.png";
import proyects from "../../assets/nav/proyects.png";
import skills from "../../assets/nav/skills.png";
import timeline from "../../assets/nav/timeline.png";
import contact from "../../assets/nav/contact.png";

export default function OptionsNavSup(){

    //Control del ScrollY al hacer click en las opciones
    // const scrollToSection = (scrollOffset) => {
    //     window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
    // };

    const [section, setSection] = useState(null);

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setSection(id); // Actualizamos el estado para resaltar el enlace activo
      }
    }

    return(
        <div className="hidden md:flex md:flex-row md:w-full md:py-0  md:items-center">
            <ul class="flex md:flex-row md:justify-evenly w-full md:text-base lg:text-lg">
                <li class="md:px-5 cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white relative overflow-hidden group" onClick={() => scrollToSection('Inicio')}>
                    <a href="#Inicio">
                        <b>Inicio</b>
                    </a>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:py-[5px] md:pl-[1px] lg:py-[5.2px] lg:pl-0">
                        <img src={inicio} alt="Inicio" class="md:w-[12px] lg:w-[16px]  object-cover" />
                    </div>
                </li>
                <li class="md:px-5 md:w-[110px] cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white overflow-hidden group lg:w-[140px]" onClick={() => scrollToSection('AboutMe')}>
                    <a href="#AboutMe">
                        <b>Sobre mi</b>
                    </a>   
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:py-[4px] md:pl-[1.8px] lg:py-[5px] lg:pl-0">
                        <img src={about} alt="Sobre mi" class="md:w-[11.5px] lg:w-[12.5px]  object-cover" />
                    </div>
                </li>
                <li class="md:px-5 lg:w-[140px] cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white overflow-hidden group" onClick={() => scrollToSection('Skills')}>
                    <a href="#Skills">
                        <b class="lg:ml-[4px]">Habilidades</b>
                    </a>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 py-1 ">
                        <img src={skills} alt="Habilidades" class="md:w-[12px] lg:w-[16px]  object-cover" />
                    </div>
                </li>
                <li class="md:px-5 lg:w-[120px] cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white overflow-hidden group" onClick={() => scrollToSection('Proyectos')}>
                    <a href="#Proyectos">
                        <b class="ml-1 lg:ml-[10px]">Proyectos</b>
                    </a>    
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 py-1 lg:py-[3px]">
                        <img src={proyects} alt="Proyectos" class="md:w-[14px] md:ml-[4px] lg:w-[18px]  object-cover" />
                    </div>
                </li>
                <li class="md:px-5 lg:w-[120px] cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white overflow-hidden group" onClick={() => scrollToSection('Timeline')}>
                    <a href="#Timeline">
                        <b class="ml-1 lg:ml-[10px]">Timeline</b>
                    </a>    
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 py-1 lg:py-[4px]">
                        <img src={timeline} alt="Trayecto" class="md:w-[14px] md:ml-[4px] lg:w-[18px]  object-cover" />
                    </div>
                </li>
                <li class="md:px-5 cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white overflow-hidden group" onClick={() => scrollToSection('Contacto')}>
                    <a href="#Contacto">
                        <b class="ml-1">Contacto</b>
                    </a>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:py-[2.3px] md:ml-[3px] lg:ml-0 lg:py-[2px]">
                        <img src={contact} alt="Contacto" class="md:w-[16px] lg:w-[19px]  object-cover" />
                    </div>
                </li>
            </ul>
        </div>
    )
}