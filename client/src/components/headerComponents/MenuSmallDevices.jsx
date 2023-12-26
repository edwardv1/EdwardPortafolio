import React, { useState } from "react";
import inicio from "../../assets/nav/inicio.png";
import about from "../../assets/nav/about.png";
import proyects from "../../assets/nav/proyects.png";
import skills from "../../assets/nav/skills.png";
import timeline from "../../assets/nav/timeline.png";
import contact from "../../assets/nav/contact.png";


export default function MenuSmallDevices({navClass, menuVisible}){

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
        <div className={`md:hidden ${navClass} fixed top-[78px] right-0 h-screen w-[200px]  pl-4 transform transition-transform duration-1000 ease-out ${menuVisible ? 'translate-x-0 ' : 'translate-x-full'}`}>
            <ul class="flex h-5/6 sm:h-[76%] flex-col items-center text-center justify-around w-full ">
                <li class="  w-full mr-[16px] border-t-2 border-b-2 border-white py-2 hover:border-sky-600 cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white overflow-hidden group" onClick={() => scrollToSection('Inicio')}>
                    <a href="#Inicio">
                        <b>Inicio</b>
                    </a>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 py-[12.8px] px-[52px]">
                        <img src={inicio} alt="Inicio" class="w-[14px]  object-cover" />
                    </div>
                </li>
                <li class=" w-full mr-[16px] border-t-2 border-b-2 border-white py-2 hover:border-sky-600 cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white overflow-hidden group" onClick={() => scrollToSection('AboutMe')}>
                    <a href="#AboutMe">
                        <b>Sobre mi</b>
                    </a>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 py-[12.8px] px-[40px]">
                        <img src={about} alt="Sobre mi" class="w-[11.5px]  object-cover" />
                    </div>
                </li>
                <li class=" w-full mr-[16px] border-t-2 border-b-2 border-white py-2 hover:border-sky-600 cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white overflow-hidden group" onClick={() => scrollToSection('Skills')}>
                    <a href="#Skills">
                        <b>Habilidades</b>
                    </a>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 py-[10.8px] px-[26px]">
                        <img src={skills} alt="Habilidades" class="w-[16px]  object-cover" />
                    </div>
                </li>
                <li class=" w-full mr-[16px] border-t-2 border-b-2 border-white py-2 hover:border-sky-600 cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white overflow-hidden group" onClick={() => scrollToSection('Proyectos')}>
                    <a href="#Proyectos">
                        <b>Proyectos</b>
                    </a>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 py-[10.8px] px-[32px]">
                        <img src={proyects} alt="Proyectos" class="w-[16px]  object-cover" />
                    </div>
                </li>
                <li class=" w-full mr-[16px] border-t-2 border-b-2 border-white py-2 hover:border-sky-600 cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white overflow-hidden group" onClick={() => scrollToSection('Timeline')}>
                    <a href="#Timeline">
                        <b>Timeline</b>
                    </a>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 py-[10.8px] px-[32px]">
                        <img src={timeline} alt="Timeline" class="w-[16px]  object-cover" />
                    </div>
                </li>
                <li class=" w-full mr-[16px] border-t-2 border-b-2 border-white py-2 hover:border-sky-600 cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white overflow-hidden group" onClick={() => scrollToSection('Contacto')}>
                    <a href="#Contacto">
                        <b>Contacto</b>
                    </a>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 py-[9.5px] px-[32px]">
                        <img src={contact} alt="Contacto" class="w-[18px]  object-cover" />
                    </div>
                </li>
            </ul>
        </div>
    )
}