import React from "react";
import inicio from "../../assets/inicio.png";
import about from "../../assets/about.png";
import proyects from "../../assets/proyects.png";
import skills from "../../assets/skills.png";
import contact from "../../assets/contact.png";

export default function OptionsNavSup(){

    //Control del ScrollY al hacer click en las opciones
    const scrollToSection = (scrollOffset) => {
        window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
    };

    return(
        <div className="hidden md:flex md:flex-row md:w-full md:py-0  md:items-center">
            <ul class="flex md:flex-row md:justify-evenly w-full md:text-base lg:text-lg">
                <li class="md:px-5 cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white relative overflow-hidden group" onClick={() => scrollToSection(0)}>
                    <b>Inicio</b>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:py-[5px] md:pl-[1px] lg:py-[6.8px] lg:pl-0">
                        <img src={inicio} alt="Inicio" class="md:w-[12px] lg:w-[14px]  object-cover" />
                    </div>
                </li>
                <li class="md:px-5 md:w-[110px] cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white overflow-hidden group lg:w-[140px]" onClick={() => scrollToSection(920)}>
                    <b>Sobre mi</b>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:py-[2.4px] md:pl-[1.8px] lg:py-[4.2px] lg:pl-0">
                        <img src={about} alt="Sobre mi" class="md:w-[11.5px] lg:w-[12.5px]  object-cover" />
                    </div>
                </li>
                <li class="md:px-5 lg:w-[140px] cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white overflow-hidden group" onClick={() => scrollToSection(1900)}>
                    <b class="lg:ml-[5px]">Habilidades</b>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 py-1 ">
                        <img src={skills} alt="Habilidades" class="md:w-[12px] lg:w-[16px]  object-cover" />
                    </div>
                </li>
                <li class="md:px-5 lg:w-[120px] cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white overflow-hidden group" onClick={() => scrollToSection(2860)}>
                    <b class="ml-1 lg:ml-3"> Proyectos</b>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 py-1 lg:py-[3px]">
                        <img src={proyects} alt="Proyectos" class="md:w-[14px] md:ml-[4px] lg:w-[18px]  object-cover" />
                    </div>
                </li>
                <li class="md:px-5 cursor-pointer transform transition-transform duration-500 hover:scale-105 text-white overflow-hidden group" onClick={() => scrollToSection(3980)}>
                    <b class="ml-1">Contacto</b>
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:py-[2px] md:ml-[3px] lg:ml-0 lg:py-[3px]">
                        <img src={contact} alt="Contacto" class="md:w-[16px] lg:w-[18px]  object-cover" />
                    </div>
                </li>
            </ul>
        </div>
    )
}