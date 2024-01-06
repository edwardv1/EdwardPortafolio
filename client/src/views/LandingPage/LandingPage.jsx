import React, { useState } from "react";
import Header from "../Header/Header";
import Inicio from "../Inicio/Inicio";
import AboutMe from "../AboutMe/AboutMe";
import Proyectos from "../Proyectos/Proyectos";
import Skills from "../Skills/Skills";
import Contacto from "../Contacto/Contacto";
import Footer from "../Footer/Footer";
import Timeline from "../Timeline/Timeline";
import { ModalDescription } from "../../components/modals/modalDescription/ModalDescription";

export default function LandingPage (){
    const [isVisibleModalDescription, setIsVisibleModalDescription] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [selectedDescription, setSelectedDescription] = useState('');
    const [techName, setTechName] = useState('');

    const openModalDescription = (description) => {
        setIsVisibleModalDescription(true);
        setSelectedDescription(description);
    }
    const handleTechName = (name) => {
        setTechName(name);
    }
    const closeModalDescription = () => {
        setIsVisibleModalDescription(false);
    };
    const handleSidebarVisibility = (isVisible) => {
        setIsSidebarVisible(isVisible);
        if (isVisible) {
            closeModalDescription();
        }
    };
 
    return(
        <div className="h-screen relative">
            <Header handleSidebarVisibility={handleSidebarVisibility}/>
            <Inicio/>
            <AboutMe/>
            <Skills openModalDescription={openModalDescription} changeName={handleTechName}/>
            <ModalDescription name={techName} description={selectedDescription} visible={isVisibleModalDescription} onClose={closeModalDescription} />
            <Proyectos/>
            <Timeline/>
            <Contacto/>
            <Footer className="absolute bottom-0"/>
        </div>
    )
}