import React from "react";
import background from "../../assets/backgrounds/skillsBg.png"
import CardsTech from "../../components/cardsTech/CardsTech";
import TitleScreen from "../../components/TitleScreen/TitleScreen";

export default function Skills (){
 
    return(
        <div id="Skills" className="bg-cover bg-center  w-[100vw]" style={{ backgroundImage: `url(${background})`}}>
            <TitleScreen title={"HABILIDADES"}/>
            <p class="text-white px-2 sm:px-8 mt-14 text-center text-lg sm:mt-10 sm:text-xl md:text-2xl xl:text-3xl xl:pt-8 2xl:pt-0">Estos son los lenguajes, tecnologías y herramientas que utilizo.</p>
            <CardsTech/>
        </div>
    )
}